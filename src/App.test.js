import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("Renders HomePage component when navigating to /", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );
  const homePageElement = screen.getByText("Specials");
  expect(homePageElement).toBeInTheDocument();
});

test("Navigates to AboutPage when clicking on About link", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  const aboutLink = screen.getByText("About", { selector: "a.nav-link" });
  fireEvent.click(aboutLink);

  const aboutPageElement = screen.getByText("Welcome To Our Restaurant");
  expect(aboutPageElement).toBeInTheDocument();
});

test("Navigates to BookingPage when clicking on Reservation link", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  const reservationLink = screen.getByText("Reservation", {
    selector: "a.nav-link",
  });
  fireEvent.click(reservationLink);

  const bookingPageElement = screen.getByText(
    "Welcome to our restaurant reservation form!"
  );
  expect(bookingPageElement).toBeInTheDocument();
});

test("Renders BookingPage component when navigating to /booking", () => {
  render(
    <MemoryRouter initialEntries={["/booking"]}>
      <App />
    </MemoryRouter>
  );

  const bookingPageElement = screen.getByText(
    "Welcome to our restaurant reservation form!"
  );
  expect(bookingPageElement).toBeInTheDocument();
});
