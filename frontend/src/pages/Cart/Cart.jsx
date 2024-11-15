import React, { useContext } from 'react'

import { StoreContext } from '../../context/StoreContext'
import './Cart.css'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const { cartItem, food_list, removeFromCart, getTotalCartAmount, url } = useContext( StoreContext)

  const navigate = useNavigate()

  return (
    <div className='cart'>
      <div className="cart-item">
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr/>
        { food_list.map(( item, index) => {
          if(cartItem[item._id]>0) {
            return (
              <div>
                <div className='cart-item-title cart-item-item'>
                  <img src={ url+"/images/"+item.image } alt='' />
                  <p>{ item.name }</p>
                  <p>$ {item.price}</p>
                  <p>{ cartItem[item._id]}</p>
                  <p>{ item.price * cartItem[item._id]}</p>
                  <p className='cross' onClick={() => removeFromCart(item._id)}>x</p>
                 </div>
                 <hr />
                 </div>
              
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Sub-Total</p>
              <p>$ { getTotalCartAmount() }</p>
            </div>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>$ { getTotalCartAmount() === 0?0:2 }</p>
            </div>
            <div className="cart-total-details">
              <p>Total</p>
              <b>$ { getTotalCartAmount() === 0?0: getTotalCartAmount()+2 }</b>
              <hr />
            </div>
          </div>
          <button onClick={() => navigate('/order')}>Procced to Checkout</button>
        </div>
        <div className="card-promo-code">
          <div>
            <p>If you have a promo code add it here </p>
            <div className="card-promo-code-input">
              <input type='text' placeholder='promo-code' />
              <button tybe='submit'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
