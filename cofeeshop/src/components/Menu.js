import React from 'react';
import MenuItem from './MenuItem';

function Menu(props) {
  console.log("Menu", props)
  return (
    <div className="menu">
      <div className="row">
        <h3 className="col-12 col-md-6 col-lg-4">Menu</h3>
      </div>
      
      <div className={'row container pb-2'} style={{margin: '0 auto'}}>
        {props.menuItems.map(item => (
          <MenuItem updateShoppingCart={(e) => {
            
            props.updateShoppingCart(e)
          } } key={item.id} item={item} isLiked={props.likedCoffee.includes(item.id)} addFavoriteHeart={(e) => props.addFavoriteHeart(e)} likedCoffee={props.likedCoffee}/>
        ))}
      </div>
    </div>
  );
}

export default Menu;
