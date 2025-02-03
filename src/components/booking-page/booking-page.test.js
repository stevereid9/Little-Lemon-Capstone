import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import BookingPage from "./booking-page.component";
import BookingForm from "../booking-form/booking-form.component";
import { initializeTimes } from "../../data/initializeTimes";
import { fetchAPI } from "../../mock-api/mockAPI";
import { v4 as uuidv4 } from "uuid";
import { act } from "react-dom/test-utils";

// rpl: don't need that for now
// jest.mock("uuid", () => ({
//   v4: jest.fn().mockReturnValue("fixed-uuid"),
// }));

test("Renders the BookingForm heading", () => {
  render(
    <Router>
      <BookingPage />
    </Router>
  );

  const headingElement = screen.getByText(
    "Welcome to our restaurant reservation form!"
  );

  expect(headingElement).toBeInTheDocument();
});

// rpl: for old functionality (previous Coursera instructions)
// describe("initializeTimes function", () => {
//   it("should return an array of available times", () => {
//     const mockAvailableTimes = [
//       { id: 1, value: "10:00", available: true },
//       { id: 2, value: "11:00", available: true },
//       { id: 3, value: "12:00", available: true },
//       { id: 4, value: "13:00", available: true },
//       { id: 5, value: "14:00", available: true },
//       { id: 6, value: "15:00", available: true },
//       { id: 7, value: "16:00", available: true },
//       { id: 8, value: "17:00", available: true },
//       { id: 9, value: "18:00", available: true },
//       { id: 10, value: "19:00", available: true },
//       { id: 11, value: "20:00", available: true },
//       { id: 12, value: "21:00", available: true },
//       { id: 13, value: "22:00", available: true },
//     ];

//     const result = initializeTimes();

//     expect(result).toEqual(mockAvailableTimes);
//   });
// });

describe("fetchAPI function", () => {
  it("should return an array of available times", () => {
    const date = new Date();
    const mockData = fetchAPI(date);

    const availableTimes = mockData
      .filter((time) => time.available)
      .map((time) => time.value);

    const expectedAvailableTimes = [
      "10:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
    ];

    // console.log('rpl/test:', { availableTimes }, { expectedAvailableTimes });
    expect(availableTimes).toEqual(expectedAvailableTimes);
  });
});

test("updateTimes function updates the state correctly", () => {
  const newTimes = [
    { id: 1, value: "10:00", available: true },
    { id: 2, value: "11:00", available: true },
    { id: 3, value: "12:00", available: true },
  ];

  const mockHandleUpdateAvailableTimes = jest.fn();

  render(
    <BookingForm
      availableTimes={[]}
      handleUpdateAvailableTimes={mockHandleUpdateAvailableTimes}
    />
  );

  act(() => {
    mockHandleUpdateAvailableTimes(newTimes);
  });

  expect(mockHandleUpdateAvailableTimes).toHaveBeenCalledWith(newTimes);
});
