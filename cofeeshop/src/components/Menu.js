import React from 'react';
import MenuItem from './MenuItem';

function Menu(props) {
  return (
    <div className="menu">
      <div className="row">
        <h3 className="col-12 p-1">Menu</h3>
      </div>
      
      <div className={'row container pb-2'} style={{margin: '0 auto'}}>
        {props.menuItems.map(item => (
          <MenuItem updateShoppingCart={(e) => {
            console.log('e',e);
            props.updateShoppingCart(e)
          } } key={item.id} item={item}/>
        ))}
      </div>
    </div>
  );
}

export default Menu;
