import React from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div>
      <Header/>
<main className="flex flex-col gap-4 p-6 md:flex md:flex-row md:p-0">

        <div className="hidden md:flex md:w-[20%]">
            <div className=" bg-gray-100 gap-4 pr-2 pt-6 w-[100%]">

                <div className="flex items-center justify-start p-3 gap-3 pl-5">
                    <i className="fa-solid fa-grip text-[1.5rem]"></i>

                    <Link to={"/dashboard"} className="text-[1rem]">Dashboard</Link>
                </div>
                <div className="flex items-center p-3 gap-3 pl-5">
                    <i className="fa-solid fa-basket-shopping text-[1.5rem]"></i>

                    <Link to={"/addproduct"} className="text-[1rem]">Add Product</Link>
                </div>
                <div className="flex items-center p-3 gap-3 pl-5">
                    <i className="fa-solid fa-table-list text-[1.5rem]"></i>

                    <Link to={"/viewproduct"} className="text-[1rem]">View Product</Link>
                </div>
                <div className="flex items-center p-3 gap-3 pl-5">
                    <i className="fa-solid fa-arrow-right-from-bracket text-[1.5rem]"></i>

                    <button onClick={()=>{navigate('/')}} className="text-[1rem]">Logout</button>
                </div>
            </div>

        </div>

        <div className="flex flex-col mt-50 gap-4 md:w-[80%] md:flex-row md:justify-center md:mb-50 md:gap-8">
            <div className="shadow-[0_8px_12px_rgb(0,0,0,0.2)] p-6 md:w-[45%] lg:w-[40%]">
                <h1 className="text-center font-medium">Manage Product</h1>
                <p className="text-center font-light pt-2">View, edit, and delete products in your inventory.</p>
            </div>
            <div className="shadow-[0_8px_12px_rgb(0,0,0,0.2)] p-6 md:w-[45%] lg:w-[40%]">
                <h1 className="text-center font-medium">Add New Product</h1>
                <p className="text-center font-light pt-2">View, edit, and delete products in your inventory.</p>
            </div>
        </div>
    </main>
    <Footer/>
    </div>
  )
}

export default Dashboard