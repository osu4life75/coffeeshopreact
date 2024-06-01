import React from 'react';
import Menu from './Menu';
// import Merchandise from './Merchandise';
import { GiCoffeeCup } from 'react-icons/gi'; // Import the coffee cup icon

export default function Body(props) {
  return (
    <div className="container">
      {/* Menu Section */}
      <Menu 
        title={'Menu'} 
        updateShoppingCart={props.updateShoppingCart} 
        menuItems={props.menuItems} 
        addFavoriteHeart={props.addFavoriteHeart} 
        likedCoffee={props.likedCoffee} 
      />
      
      {/* Merchandise Section */}
      <Menu 
        title={'Merchandise'} 
        updateShoppingCart={props.updateShoppingCart} 
        menuItems={props.merchandiseItems} 
        addFavoriteHeart={props.addFavoriteHeart} 
        likedCoffee={props.likedCoffee} 
      />

      {/* Display recommended coffee */}
      {props.recommendedCoffee && (
        <div className="recommended-coffee">
          <h3>Recommended Coffee for Today's Weather:</h3>
          <p style={{ fontSize: '28px' }}>
            {props.recommendedCoffee} <GiCoffeeCup style={{ verticalAlign: 'middle' }} /> {/* Add coffee cup icon */}
          </p> 
          <p>Enjoy your {props.recommendedCoffee.toLowerCase()}!</p>
        </div>
      )}
    </div>
  );
}
