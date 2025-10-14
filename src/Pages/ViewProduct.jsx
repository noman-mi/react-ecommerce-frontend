import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function ViewProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  return (
    <div>
      <Header />

      <main className="p-6">
        <h1 className="text-center text-3xl font-bold mb-6">View Products</h1>

        {products.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-left">
              <thead className="bg-blue-100">
                <tr>
                  <th className="p-3 border">Image</th>
                  <th className="p-3 border">Title</th>
                  <th className="p-3 border">Price</th>
                  <th className="p-3 border">Category</th>
                  <th className="p-3 border">Description</th>
                </tr>
              </thead>
              <tbody>
                {products.map((item, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-3 border">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                    </td>
                    <td className="p-3 border">{item.title}</td>
                    <td className="p-3 border">${item.price}</td>
                    <td className="p-3 border">{item.category}</td>
                    <td className="p-3 border">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-500">No products found.</p>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default ViewProduct;
