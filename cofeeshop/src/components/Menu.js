import React from 'react';

function Menu({ menuItems }) {
  return (
    <div className="menu">
      <h2>Menu</h2>
      <div className="menu-items">
        {menuItems.map(item => (
          <div key={item.id} className="card">
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
