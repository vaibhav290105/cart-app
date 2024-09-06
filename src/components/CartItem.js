import React from 'react';
import './CartItem.css';

const CartItem = ({ item, increaseItem, decreaseItem, removeItem }) => {
  return (
    <div className="cart-item">
      <img src={item.img} alt={item.title} className="cart-item-img" />
      <div>
        <h4>{item.title}</h4>
        <p className="item-price">${item.price}</p>
        <div className="item-amount">
          <button className="amount-btn" onClick={() => increaseItem(item.id)}>+</button>
          <span className="amount">{item.amount}</span>
          <button className="amount-btn" onClick={() => decreaseItem(item.id)}>-</button>
        </div>
        <button className="remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;