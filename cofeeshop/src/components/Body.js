import React from 'react';
import Menu from './Menu';

export default function Body(props) {
  return (
    <div className="container">
       <Menu updateShoppingCart={(e) => props.updateShoppingCart(e) } menuItems={props.menuItems}/>
     </div>
  );
}
