import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistItems(storedWishlist);
  }, []);

  const handleRemove = (id) => {
    const updatedWishlist = wishlistItems.filter((item) => item.id !== id);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    setWishlistItems(updatedWishlist);
  };

  const handleMoveToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    handleRemove(product.id); 
  };

  return (
    <div>

      <Header />


      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Your Wishlist </h2>

        {wishlistItems.length === 0 ? (
          <p className="text-gray-600">Your wishlist is empty.</p>
        ) : (
          wishlistItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border rounded-lg shadow-sm p-4 mb-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-30 h-30 object-contain"
                />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-500">${item.price}</p>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <button
                  onClick={() => handleMoveToCart(item)}
                  className="bg-red-500 w-[100px] h-[55px] p-3 text-[0.8rem] font-bold text-white rounded-2xl"
                >
                  Move to Cart
                </button>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="bg-blue-500 w-[100px] h-[55px] p-3 text-[0.8rem] font-bold text-white rounded-2xl mt-2"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>


      <Footer />
    </div>
  );
}

export default Wishlist;
