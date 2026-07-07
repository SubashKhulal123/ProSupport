

import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import LoadingBar from "./LoadingBar.jsx";
import Home from "./pages/Home.jsx";
import Staffing from "./pages/Staffing.jsx";
import RegistrationSupport from "./pages/RegistrationSupport.jsx";
import RoomCleaning from "./pages/RoomCleaning.jsx";
import Company from "./pages/Company.jsx";
import Contact from "./pages/Contact.jsx";
import Privacy from "./pages/Privacy.jsx";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <LoadingBar />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/staffing" element={<Staffing />} />
          <Route path="/registration-support" element={<RegistrationSupport />} />
          <Route path="/room-cleaning" element={<RoomCleaning />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
