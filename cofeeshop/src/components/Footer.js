import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";


export default function Footer() {
  return (
    <>
    {/* Social Media Links */}
    <div className="social-media">
      <FaFacebook />
      <RiTwitterXFill />
      <FaInstagramSquare />

    </div>

    {/* Hours of Operation
    <div className="hours-of-operation">
      <h3>Hours of Operation</h3>
      <p>Monday - Friday: 9am - 6pm</p>
      <p>Saturday: 10am - 4pm</p>
      <p>Sunday: Closed</p>
    </div> */}

    {/* Logo
    <img src="https://github.com/osu4life75/coffeShopImages/blob/main/coffeeshoplogo.jpeg?raw=true" alt="Company Logo" className="logo"/> */}

   {/* Copyright Notice */}
    <div className="copyright">
      <p>&copy; {new Date().getFullYear()} ALL RIGHTS ARE RESERVED</p>
    </div>
  </>
);
}
 