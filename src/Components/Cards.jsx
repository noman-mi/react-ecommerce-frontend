import React, { useEffect, useState } from "react";
import Button from "./Buttons";
import axios from "axios"

function Cards({searchTerm}) {
  const [products, setProducts] = useState([]);

useEffect(() => {
  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setProducts(response.data);
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
  };


  const addToWishlist = (product) => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    const exists = wishlist.some((item) => item.id === product.id);
    if (!exists) {
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    } else {
      alert("This item is already in your wishlist!");
    }
  };

const filteredProducts = products.filter((product) =>
  product.title.toLowerCase().includes(searchTerm.toLowerCase())
);


  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
      {filteredProducts.map((product) => (
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
