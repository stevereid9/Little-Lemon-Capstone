import { Routes, Route } from "react-router-dom";

import MainLayoutRestaurantRpl from "./components/main-layout/main-layout.component";
import HomePage from "./components/home/home.component";
import AboutPage from "./components/about/about.component";
import MenuPage from "./components/menu/menu.component";
import BookingPage from "./components/booking-page/booking-page.component";
import OrderPage from "./components/order/order.component";
import LogInPage from "./components/login/login.component";
import ConfirmedBooking from "./components/confirmed-booking/confirmed-booking.component";

import "./styles/main.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayoutRestaurantRpl />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/menu" element={<MenuPage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
          <Route path="/order" element={<OrderPage />}></Route>
          <Route path="/login" element={<LogInPage />}></Route>
          <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
