import React from 'react';
import Menu from './Menu';
import Merchandise from './Merchandise';

export default function Body(props) {
  return (
    <div className="container" >
       <Menu updateShoppingCart={(e) => props.updateShoppingCart(e) } menuItems={props.menuItems}/>
       <Merchandise updateShoppingCart={(e) => props.updateShoppingCart(e) } merchandiseItems={props.merchandiseItems}/>
     </div>
  );
}
