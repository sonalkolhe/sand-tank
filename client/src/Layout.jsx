/** @format */

import Header from "./componenets/Header.jsx";
import Footer from "./componenets/Footer.jsx";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
