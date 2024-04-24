import React from 'react';

export default function ContactCard() {
  return (
    <div className="card">
      <img src="manager_photo.jpg" className="card-img-top" alt="Manager" />
      <div className="card-body">
        <h5 className="card-title">Manager</h5>
        <p className="card-text">Phone: 123-456-7890</p>
        <p className="card-text">Email: manager@example.com</p>
        <p className="card-text">Address: 123 Main St, City, Country</p>
      </div>
    </div>
  );
}