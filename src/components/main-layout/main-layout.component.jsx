import { Outlet } from "react-router-dom";

import Header from "../header/header.component";
import Footer from "../footer/footer.component";

import "./main-layout.style.css";

const MainLayoutRestaurantRpl = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayoutRestaurantRpl;
