import React from "react";
import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

import BookingForm from "./booking-form.component";

const mockAvailableTimes = [
  { id: 1, value: "10:00" },
  { id: 2, value: "12:00" },
  { id: 3, value: "02:00" },
];

const mockOccasions = [
  { id: 1, value: "Birthday" },
  { id: 2, value: "Anniversary" },
  { id: 3, value: "New Year" },
  { id: 4, value: "Graduation" },
  { id: 5, value: "Corporate Event" },
  { id: 6, value: "Engagement" },
  { id: 7, value: "Wedding" },
];

const handleSubmit = jest.fn();
const mockUpdateTimes = jest.fn();

describe("BookingForm", () => {
  test("HTML5 validation attributes are applied correctly", async () => {
    const occaions = mockOccasions;
    const {
      getByLabelText,
      getByTestId,
      queryByTestId,
      getByText,
      queryByText,
    } = render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        handleUpdateAvailableTimes={mockUpdateTimes}
        handleSubmitForm={handleSubmit}
      />
    );

    // ############### Full Name input ###############
    const fullNameInput = getByLabelText("Full Name");
    expect(fullNameInput).toHaveAttribute("type", "text");
    fireEvent.blur(fullNameInput);
    await waitFor(() => {
      expect(getByTestId("fullNameError")).toHaveTextContent(
        "Name is required"
      );
    });

    // ############### Email input ###############
    const emailInput = getByLabelText("Email");
    expect(emailInput).toHaveAttribute("type", "email");
    // Case 1: Email is empty after blur
    fireEvent.change(emailInput, { target: { value: "" } });
    fireEvent.blur(emailInput);
    await waitFor(() => {
      expect(getByTestId("emailError")).toHaveTextContent("Email is required");
    });
    // Case 2: Email is filled but invalid
    fireEvent.change(emailInput, { target: { value: "invalidrlemail" } });
    fireEvent.blur(emailInput);
    await waitFor(() => {
      expect(getByTestId("emailError")).toHaveTextContent(
        "Invalid email address"
      );
    });
    // Case 3: Email is filled after blur and is valid
    fireEvent.change(emailInput, {
      target: { value: "validemailrpl@example.com" },
    });
    fireEvent.blur(emailInput);
    await waitFor(() => {
      expect(queryByTestId("emailError")).toBeNull();
    });

    // ############### Phone Number input ###############
    const phoneNumberInput = getByLabelText("Phone Number");
    expect(phoneNumberInput).toHaveAttribute("type", "text");
    // Case 1: Phone number is empty after blur
    fireEvent.change(phoneNumberInput, { target: { value: "" } });
    fireEvent.blur(phoneNumberInput);
    await waitFor(() => {
      expect(getByTestId("phoneNumberError")).toHaveTextContent(
        "Phone number is required"
      );
    });
    // Case 2: Phone number is filled but invalid
    fireEvent.change(phoneNumberInput, { target: { value: "invalidnumber" } });
    fireEvent.blur(phoneNumberInput);
    await waitFor(() => {
      expect(getByTestId("phoneNumberError")).toHaveTextContent(
        "Invalid phone number"
      );
    });
    // Case 3: Phone number is filled correctly after blur
    fireEvent.change(phoneNumberInput, { target: { value: "+1234567890" } });
    fireEvent.blur(phoneNumberInput);
    await waitFor(() => {
      expect(queryByTestId("phoneNumberError")).toBeNull();
    });

    // ############### Date input ###############
    const dateInput = getByLabelText("Select the date for your reservation:");
    expect(dateInput).toHaveAttribute("type", "date");
    // Case 1: Date is empty after blur
    fireEvent.change(dateInput, { target: { value: "" } });
    fireEvent.blur(dateInput);
    await waitFor(() => {
      expect(getByText("Date is required")).toBeInTheDocument();
    });
    // Case 2: Date is filled correctly after blur
    const validDate = new Date().toISOString().split("T")[0];
    fireEvent.change(dateInput, { target: { value: validDate } });
    fireEvent.blur(dateInput);
    await waitFor(() => {
      expect(queryByText("Date is required")).toBeNull();
      expect(queryByText("Invalid date format")).toBeNull();
    });

    // ############### Time input ###############
    const timeSelect = getByLabelText("Choose the time for your reservation:");
    expect(timeSelect).toBeInTheDocument();
    // Case 1: Time is empty after blur
    fireEvent.blur(timeSelect);
    await waitFor(() => {
      expect(getByText("Reservation time is required")).toBeInTheDocument();
    });
    // Case 2: Time is filled after blur
    fireEvent.change(timeSelect, { target: { value: "10:00" } });
    fireEvent.blur(timeSelect);
    await waitFor(() => {
      expect(queryByText("Reservation time is required")).toBeNull();
    });

    // ############### Guests input ###############
    const guestsInput = getByLabelText(
      "Specify the number of guests joining for the reservation:"
    );
    expect(guestsInput).toHaveAttribute("type", "number");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "12");
  });
});

test("render and submit a booking form that utilizes Formik", async () => {
  render(
    <BookingForm
      availableTimes={mockAvailableTimes}
      handleUpdateAvailableTimes={mockUpdateTimes}
      handleSubmitForm={handleSubmit}
    />
  );
  const occaions = mockOccasions;

  await act(async () => {
    userEvent.type(screen.getByLabelText("Full Name"), "Ralitsa Lefterova");

    userEvent.type(screen.getByLabelText("Email"), "test@example.com");

    userEvent.type(screen.getByLabelText("Phone Number"), "1234567890");

    userEvent.type(
      screen.getByLabelText("Select the date for your reservation:"),
      "2024-04-10"
    );

    userEvent.selectOptions(
      screen.getByLabelText("Choose the time for your reservation:"),
      "10:00"
    );

    userEvent.type(
      screen.getByLabelText(
        "Specify the number of guests joining for the reservation:"
      ),
      "2"
    );

    userEvent.selectOptions(
      screen.getByLabelText(
        "Let us know if you're celebrating any special occasion:"
      ),
      "Birthday"
    );

    userEvent.type(
      screen.getByLabelText("Your message"),
      "This is a test message."
    );

    userEvent.click(screen.getByRole("button", { name: /book now/i }));
  });

  await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith({
      fullName: "Ralitsa Lefterova",
      email: "test@example.com",
      phoneNumber: "1234567890",
      date: "2024-04-10",
      time: "10:00",
      guests: 2,
      occasion: "Birthday",
      comment: "This is a test message.",
    })
  );
});
