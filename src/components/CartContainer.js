import React from 'react';
import CartItem from './CartItem';

const CartContainer = ({ cartItems, clearCart, totalPrice, increaseItem, decreaseItem, removeItem }) => {
  if (cartItems.length === 0) {
    return <h3>Your cart is empty</h3>;
  }

  return (
    <section className="cart">
      {cartItems.map(item => (
        <CartItem
          key={item.id}
          item={item}
          increaseItem={increaseItem}
          decreaseItem={decreaseItem}
          removeItem={removeItem}
        />
      ))}
      <h4>Total Price: <span className="cart-total">{totalPrice}</span></h4>
      <button className="clear-btn" onClick={clearCart}>Clear Cart</button>
    </section>
  );
};

export default CartContainer;
