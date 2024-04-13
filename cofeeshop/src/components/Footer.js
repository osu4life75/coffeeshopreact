import React from 'react'

export default function Footer() {
  return (
    <>
    {/* Social Media Links */}
    <div className="social-media">
      <a href="https://facebook.com"><img src="/facebook-icon.png" alt="Facebook" /></a>
      <a href="https://twitter.com"><img src="/twitter-icon.png" alt="Twitter" /></a>
      <a href="https://instagram.com"><img src="/instagram-icon.png" alt="Instagram" /></a>
    </div>

    {/* Hours of Operation */}
    <div className="hours-of-operation">
      <h3>Hours of Operation</h3>
      <p>Monday - Friday: 9am - 6pm</p>
      <p>Saturday: 10am - 4pm</p>
      <p>Sunday: Closed</p>
    </div>

    {/* Logo */}
    <img src="/logo.png" alt="Company Logo" className="logo" />

   {/* Copyright Notice */}
    <div className="copyright">
      <p>&copy; {new Date().getFullYear()} ALL RIGHTS ARE RESERVED</p>
    </div>
  </>
);
}
 