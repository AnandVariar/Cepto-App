import React, { useContext } from 'react';
import { assets } from '../../assests/frontend_assets/assets';
import { StoreContext } from '../../context/StoreContext';

import './FoodItem.css';

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItem, addToCart, removeFromCart,url } = useContext(StoreContext);

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img src={url+"/images/"+image} className='food-item-img' alt={name} />
        {
          !cartItem[id] ? (
            <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt='Add to cart' />
          ) : (
            <div className='food-item-counter'>
              <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt='Remove from cart' />
              <p>{cartItem[id]}</p>
              <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt='Add one more' />
            </div>
          )
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt='Rating stars' />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
}

export default FoodItem;
