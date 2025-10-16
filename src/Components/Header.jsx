import React, { useState } from "react";
import image from "../assets/logo.png";
import Button from "./Buttons";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      <header className="flex justify-between p-6 items-center md:p-5 lg:p-3 lg:pl-20 lg:pr-20">
        <Link to={"/"}>
          <div className="flex justify-center items-center gap-2">
            <img src={image} alt="logo" className="w-[2.5rem]" />
            <h1 className="hidden lg:flex lg:text-[2rem] font-medium">E-Commerce</h1>
          </div>
        </Link>

        <div className="hidden md:flex">
          <nav>
            <ul className="flex gap-8">
              <li>
                <Link to={"/"} className="text-[1.4rem] font-light hover:text-blue-700">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/about"} className="text-[1.4rem] font-light hover:text-blue-700">
                  About
                </Link>
              </li>
              <li>
                <Link to={"/contact"} className="text-[1.4rem] font-light hover:text-blue-700">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex gap-3 items-center sm:gap-6">
          <Link to={"/cart"}>
            <i className="fa-solid fa-cart-plus text-[2rem] sm:text-[2.5rem] md:text-[2.2rem] opacity-70"></i>
          </Link>

          <Link to={"/wishlist"}>
            <i className="fa-solid fa-bag-shopping text-[2rem] sm:text-[2.5rem] md:text-[2.2rem] opacity-70"></i>
          </Link>

          <div className="flex md:hidden cursor-pointer" onClick={openSidebar}>
            <i className="fa-solid fa-bars text-[1.5rem]"></i>
          </div>

          <Button
            styling="hidden bg-blue-700 p-4 pl-5 pr-5 text-white font-medium rounded-[0.8rem] md:flex"
            text="Admin Dashboard"
            onClick={() => navigate("/signin")}
          />
        </div>
      </header>

      <hr className="opacity-15" />

      {isSidebarOpen && (
        <>
          <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-40 z-30"
            onClick={closeSidebar}
          ></div>

          <div className="fixed top-0 left-0 h-full w-[70%] sm:w-[60%] md:hidden bg-white shadow-lg z-40">
            <div className="flex justify-between items-center p-5 border-b">
              <h2 className="text-xl font-semibold">Menu</h2>
              <i
                className="fa-solid fa-xmark text-[1.5rem] cursor-pointer"
                onClick={closeSidebar}
              ></i>
            </div>

            <nav className="flex flex-col gap-6 p-6 text-lg">
              <Link to={"/"} className="hover:text-blue-600" onClick={closeSidebar}>
                Home
              </Link>
              <Link to={"/about"} className="hover:text-blue-600" onClick={closeSidebar}>
                About
              </Link>
              <Link to={"/contact"} className="hover:text-blue-600" onClick={closeSidebar}>
                Contact
              </Link>
              <Link to={"/cart"} className="hover:text-blue-600" onClick={closeSidebar}>
                Cart
              </Link>
              <Link to={"/wishlist"} className="hover:text-blue-600" onClick={closeSidebar}>
                Wishlist
              </Link>

              <Button
                styling="bg-blue-700 text-white p-3 font-medium"
                text="Admin Dashboard"
                onClick={() => {
                  closeSidebar();
                  navigate("/signin");
                }}
              />
            </nav>
          </div>
        </>
      )}
    </>
  );
}

export default Header;

