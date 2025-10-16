import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Checkout() {
  const [cartItems, setCartItems] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
    paymentMethod: "cod",
  });

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  alert("Order placed successfully!");
  localStorage.removeItem("cart");
  setCartItems([]);

  setFormData({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
    paymentMethod: "cod",
  });
};

  return (
    <>
    <Header/>
    <div className="bg-gray-50 py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 bg-white p-6 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-6 border-b pb-2">
            Shipping Information
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border rounded-xl w-full px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="border rounded-xl w-full px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>

            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
              className="border rounded-xl w-full px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
            />

            <div className="grid md:grid-cols-3 gap-4">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                required
                className="border rounded-xl w-full px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
              />
              <input
                type="text"
                name="postalCode"
                placeholder="Postal Code"
                value={formData.postalCode}
                onChange={handleChange}
                required
                className="border rounded-xl w-full px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="border rounded-xl w-full px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Payment Method</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === "cod"}
                    onChange={handleChange}
                  />
                  Cash on Delivery
                </label>
                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === "card"}
                    onChange={handleChange}
                  />
                  Credit / Debit Card
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="bg-orange-500 text-white w-full py-3 rounded-xl font-semibold hover:bg-orange-600 transition"
            >
              Place Order
            </button>
          </form>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm h-fit">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            Order Summary
          </h2>

          {cartItems.length > 0 ? (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-4 border-b pb-3"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>
                  <p className="font-semibold text-gray-700">
                    Rs {item.price * item.quantity}
                  </p>
                </div>
              ))}

              <div className="border-t pt-4">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total:</span>
                  <span className="text-orange-600">Rs {total}</span>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-gray-500 text-center mt-4">
            Your cart is empty
            </p>
          )}
        </div>
      </div>
    </div>    
    <Footer/>
    </>

  );
}

export default Checkout;
