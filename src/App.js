import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import ProductList from './components/ProductList';
import './App.css';

const initialProducts = [
  { id: 1, title: 'iPhone 12', price: 10, img: 'https://ocarekenya.co.ke/wp-content/uploads/2024/01/12-pro-2.webp', amount: 1 },
  { id: 2, title: 'oneplus8 pro', price: 20, img: 'https://5.imimg.com/data5/SELLER/Default/2022/5/NH/UD/IK/150885575/oneplus-8-pro-5g-12gb-rom-512gb-global-unlocked.jpg', amount: 1 },
  { id: 3, title: 'Xiaomi redmi 12', price: 30, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3k2s_apy1VWjHwVT54GHxE15LSBpaufgjUA&s', amount: 1 },
];

const App = () => {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);
  const [products, setProducts] = useState(initialProducts);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(false);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === product.id ? { ...item, amount: item.amount + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  const increaseItem = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item => item.id === id ? { ...item, amount: item.amount + 1 } : item)
    );
  };

  const decreaseItem = (id) => {
    setCartItems(prevItems =>
      prevItems
        .map(item => item.id === id ? { ...item, amount: item.amount - 1 } : item)
        .filter(item => item.amount > 0)
    );
  };

  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalItems = cartItems.reduce((total, item) => total + item.amount, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.amount, 0);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error-message">Error fetching products.</div>;
  }

  return (
    <div className="app">
      <Navbar totalItems={totalItems} />
      <ProductList products={products} addToCart={addToCart} />
      <CartContainer
        cartItems={cartItems}
        clearCart={clearCart}
        totalPrice={totalPrice}
        increaseItem={increaseItem}
        decreaseItem={decreaseItem}
        removeItem={removeItem}
      />
    </div>
  );
};

export default App;
