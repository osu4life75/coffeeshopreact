import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";
import { WiCloudy } from "react-icons/wi"; // Import the cloudy icon from react-icons

const Footer = ({ weather }) => {
  // Function to convert Celsius to Fahrenheit and round to nearest whole number
  const toFahrenheit = (celsius) => {
    return Math.round((celsius * 9/5) + 32);
  };

  return (
    <>
      {/* Social Media Links */}
      <div className="social-media" style={{ fontSize: '60px' }}>
        <a href="https://www.facebook.com">
          <FaFacebook style={{ marginRight: '10px' }} />
        </a>
        <a href="https://twitter.com">
          <RiTwitterXFill style={{ marginRight: '10px' }} />
        </a>
        <a href="https://www.instagram.com">
          <FaInstagramSquare />
        </a>
      </div>

      {/* Weather Display */}
      {weather && (
        <div className="weather">
          <h3 style={{ fontSize: '30px' }}>Weather</h3>
          <p style={{ fontSize: '25px' }}><WiCloudy size={30} style={{ marginRight: '10px' }} />{weather.weather[0].main}</p> {/* Add the cloudy icon */}
          <p style={{ fontSize: '20px' }}>Temperature: {toFahrenheit(weather.main.temp)}°F</p> {/* Convert Celsius to Fahrenheit */}
        </div>
      )}

      {/* Copyright Notice */}
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} ALL RIGHTS ARE RESERVED</p>
      </div>
    </>
  );
}

export default Footer;
