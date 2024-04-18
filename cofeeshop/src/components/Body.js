import React from 'react';

export default function Body({ menuItems }) {
  return (
    <div className="container">
      <h2 className="text-center mt-4 mb-4">Menu Items</h2>
      <div className="row">
        {menuItems.map(item => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card h-100">
              {/* Updated to use item.image instead of item.imageUrl */}
              <img src={item.image} className="card-img-top" alt="Menu Item" />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Price: ${item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
