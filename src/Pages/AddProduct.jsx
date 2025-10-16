import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function AddProduct() {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setProduct({ ...product, image: reader.result });
      };
      reader.readAsDataURL(file);
    } else {
      setProduct({ ...product, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingProducts =
      JSON.parse(localStorage.getItem("products")) || [];


    const updatedProducts = [...existingProducts, product];


    localStorage.setItem("products", JSON.stringify(updatedProducts));

    alert(" Product added successfully!");
    navigate("/viewproduct"); 
  };

  return (
    <div>
      <Header />
      <main className="flex flex-col mb-10 md:flex-row md:mb-0">
        <div className="hidden md:flex md:w-[22%] lg:w-[18%] xl:w-[15]">
          <div className="bg-gray-100 gap-4 pr-2 pt-6 w-[100%]">
            <div className="flex items-center justify-start p-3 gap-3 pl-5">
              <i className="fa-solid fa-grip text-[1.5rem]"></i>
              <Link to={"/dashboard"} className="text-[1rem]">
                Dashboard
              </Link>
            </div>
            <div className="flex items-center p-3 gap-3 pl-5">
              <i className="fa-solid fa-basket-shopping text-[1.5rem]"></i>
              <Link to={"/addproduct"} className="text-[1rem]">
                Add Product
              </Link>
            </div>
            <div className="flex items-center p-3 gap-3 pl-5">
              <i className="fa-solid fa-table-list text-[1.5rem]"></i>
              <Link to={"/viewproduct"} className="text-[1rem]">
                View Product
              </Link>
            </div>
            <div className="flex items-center p-3 gap-3 pl-5">
              <i className="fa-solid fa-arrow-right-from-bracket text-[1.5rem]"></i>
              <button onClick={() => navigate("/")} className="text-[1rem]">
                Logout
              </button>
            </div>
          </div>
        </div>


        <div className="shadow-[0_0_10px_rgb(0,0,0,0.1)] flex flex-col w-[90%] p-1 m-[auto] sm:w-[76%] md:w-[72%] md:mt-10 mb-10 lg:w-[77%] xl:w-[80]">
          <div>
            <h1 className="text-center p-4 text-3xl font-bold md:p-6 md:text-4xl">
              Add Product Data
            </h1>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row w-[100%]"
          >
            <div className="w-[95%] m-auto lg:w-[60%] lg:m-0">
              {product.image ? (
                <img
                  src={product.image}
                  alt="preview"
                  className="w-[90%] border m-[auto] h-[415px]"
                />
              ) : (
                <div className="border w-[90%] h-[415px] flex items-center justify-center m-auto">
                  <p className="text-gray-500">Image preview</p>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-4 w-[95%] mt-4 m-[auto] pb-4 lg:w-[100%] lg:m-0">
              <input
                type="text"
                name="title"
                onChange={handleChange}
                value={product.title}
                className="border p-3 w-[90%] m-[auto] md:m-0"
                placeholder="Product title"
                required
              />
              <input
                type="text"
                name="price"
                onChange={handleChange}
                value={product.price}
                className="border p-3 w-[90%] m-[auto] md:m-0"
                placeholder="Product price"
                required
              />
              <textarea
                name="description"
                onChange={handleChange}
                value={product.description}
                rows="3"
                className="border p-2 w-[90%] m-[auto] md:m-0"
                placeholder="Product Description"
              ></textarea>
              <select
                name="category"
                onChange={handleChange}
                value={product.category}
                className="border p-3 w-[90%] m-[auto] md:m-0"
              >
                <option value="">Select Category</option>
                <option value="Angoor">Elctronic</option>
                <option value="Apple">Clothing</option>
                <option value="Banana">Food</option>
              </select>
              <input
                type="file"
                name="image"
                onChange={handleChange}
                className="border p-3 w-[90%] m-[auto] md:m-0"
              />
              <button
                type="submit"
                className="rounded-2xl p-3 bg-blue-500 text-white w-[90%] m-[auto] md:m-0"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AddProduct;
