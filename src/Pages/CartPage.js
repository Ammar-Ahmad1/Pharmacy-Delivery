import React,{useState} from "react";
import {useNavigate} from 'react-router-dom';
const CartPage = () => {
  const navigate = useNavigate();

  console.log(JSON.parse(localStorage.getItem("cart")));
  const cartIt = JSON.parse(localStorage.getItem("cart"));
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Company</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>${item.company}</td>
                  <td>{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-center">
            <button className="btn btn-primary">Checkout</button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <p>Your cart is empty.</p>
          <button className="btn btn-primary"
          onClick={() => navigate('/')}
          >Continue Shopping</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
