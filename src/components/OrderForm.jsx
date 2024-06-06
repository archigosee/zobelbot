// eslint-disable-next-line no-unused-vars
import React, 
{ useState } from 'react';

const OrderForm = () => {
  const [order, setOrder] = useState([]);
  const [user, setUser] = useState('');

  const handleOrder = async () => {
    const response = await fetch('/api/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user, order }),
    });
    const result = await response.json();
    alert(result.message);
  };

  return (
    <div>
      <h1>Order Form</h1>
      <input 
        type="text" 
        placeholder="Your Telegram Username" 
        value={user} 
        onChange={(e) => setUser(e.target.value)} 
      />
      <button onClick={() => setOrder([...order, 'Item1'])}>Add Item 1</button>
      <button onClick={() => setOrder([...order, 'Item2'])}>Add Item 2</button>
      <button onClick={handleOrder}>Place Order</button>
    </div>
  );
};

export default OrderForm;
