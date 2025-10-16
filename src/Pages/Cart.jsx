import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate()
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };


  const increaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };


  const decreaseQuantity = (id) => {
    const updatedCart = cartItems
      .map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <Header />

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-600 text-center">Your cart is empty.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200 rounded-lg shadow-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 p-2 text-left">Image</th>
                  <th className="border border-gray-200 p-2 text-left">Title</th>
                  <th className="border border-gray-200 p-2 text-left">Price</th>
                  <th className="border border-gray-200 p-2 text-left">Quantity</th>
                  <th className="border border-gray-200 p-2 text-left">Sub Total</th>
                  <th className="border border-gray-200 p-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border border-gray-200 text-center">
                    <td className="p-2">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 object-contain mx-auto"
                      />
                    </td>
                    <td className="p-2">{item.title}</td>
                    <td className="p-2">${item.price.toFixed(2)}</td>
                    <td className="p-2 flex justify-center items-center">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="bg-gray-300 px-2 rounded text-lg font-bold"
                      >
                        –
                      </button>
                      <span className="px-3">{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="bg-gray-300 px-2 rounded text-lg font-bold"
                      >
                        +
                      </button>
                    </td>
                    <td className="p-2">${(item.price * item.quantity).toFixed(2)}</td>
                    <td className="p-2">
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="bg-red-500 text-white px-4 py-1 rounded-[7px] hover:bg-red-600 cursor-pointer"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-between items-center border-t pt-4 mt-4">
              <h3 className="text-lg font-semibold">Total:</h3>
              <p className="text-xl font-bold text-green-600">
                ${totalPrice.toFixed(2)}
              </p>
            </div>

            <div className="flex justify-end mt-4">
              <button onClick={()=>{navigate('/checkout')}} className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Cart;
