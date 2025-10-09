import React, { useEffect, useState } from "react";
import Button from "./Buttons";
import { useNavigate } from "react-router-dom";

function Cards() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

useEffect(() => {
  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
  };

  fetchProducts();

}, []);


  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart");
  };


  const addToWishlist = (product) => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    const exists = wishlist.some((item) => item.id === product.id);
    if (!exists) {
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      navigate("/wishlist");
    } else {
      alert("This item is already in your wishlist!");
    }
  };

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-32 h-32 object-contain mb-4"
          />
          <h3 className="text-sm font-semibold text-gray-800 text-center mb-2">
            {product.title}
          </h3>
          <p className="text-green-600 font-bold text-lg">${product.price}</p>

          <Button
            text="Add To Cart"
            styling="mb-2 font-bold px-4 py-2 bg-red-500 text-white rounded-lg cursor-pointer"
            onClick={() => addToCart(product)}
          />

          <Button
            text="Add To Wishlist"
            styling="mb-2 font-bold px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer"
            onClick={() => addToWishlist(product)}
          />
        </div>
      ))}
    </div>
  );
}

export default Cards;
