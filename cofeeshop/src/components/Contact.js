import React from 'react';

export default function ContactCard() {
  return (
    <div className="row">
      <div className="col-12 col-md-4">
        <img src="https://github.com/osu4life75/coffeShopImages/blob/main/images.jpeg?raw=true" className="manager" alt="Manager" />
      </div>
      <div className="col-12 col-md-4">
        <div className="card-body">
          <h5 className="card-title">Manager</h5>
          <p className="card-text">
            Phone: <a href="tel:405-982-1977">405-982-1977</a>
          </p>
          <p className="card-text">
            Email: <a href="mailto:glynch77@icloud.com">glynch77@icloud.com</a>
          </p>
          <p className="card-text">Address: 123 Main St, City, Country</p>
          <h3>Hours of Operation</h3>
          <p>Monday - Friday: 9am - 6pm</p>
          <p>Saturday: 10am - 4pm</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
      <div className="col-12 col-md-4">
        <img src="https://github.com/osu4life75/coffeShopImages/blob/main/coffeeshoplogo.jpeg?raw=true" alt="Company Logo" className="logo" />
      </div>
    </div>
  );
}
