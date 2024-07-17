import React, { useState } from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';


export default function MenuItem(props) {
  const [isClicked, setIsClicked] = useState(false);

  const toggleFavorite = () => {
    props.addFavoriteHeart(props.item.id);
  };

  const addToCart = () => {
    props.updateShoppingCart(props.item);
    setIsClicked(true); // Update state to indicate button click
    // Reset the state after a certain delay if needed
    setTimeout(() => setIsClicked(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="col-12 col-md-6 col-lg-4" style={{ padding: '12px' }}>
      <div className="card">
        <img className="cardimg" src={props.item.image} style={{ borderBottom: '1px solid lightgray' }} />
        <div className="card-body">
          <h5 className="card-title">{props.item.item}</h5>
          <p className="card-text">Price: {props.item.price}</p>
          <button className={`btn btn-primary mr-2 ${isClicked ? 'clicked' : ''}`} onClick={addToCart}>
            {isClicked ? 'Added To Cart' : 'Add To Cart'}
          </button>
          {props.isLiked ? (
            <FaHeart className="favorite-icon text-danger" onClick={toggleFavorite} />
          ) : (
            <FaRegHeart className="favorite-icon" onClick={toggleFavorite} />
          )}
        </div>
      </div>
    </div>
  );
}
