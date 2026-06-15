import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home.jsx";
// import Products from "../pages/products/Products.jsx";
import Contact from "../pages/contact/Contact.jsx";
import Hotels from "../pages/hotel/Hotels.jsx";
import HotelDetails from "../pages/hotel/HotelDetails.jsx";
import MyBooking from "../pages/mybooking/MyBooking.jsx";
// import About from "../pages/about/About.jsx";


const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/rooms/:id" element={<HotelDetails />} />
            <Route path="/mybookings" element={<MyBooking />} />
            <Route path="*" element={<h2 className="text-2xl font-bold text-center py-40">Page Not Found</h2>} />
        </Routes>
    )
}

export default AllRoutes;