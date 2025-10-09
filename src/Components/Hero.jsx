import React from 'react'

function Hero() {
  return (
    <div>


        <div className="flex flex-col mt-5">
            <h1 className="text-center font-bold text-[8.5vw] lg:text-[3vw] sm:mb-4 sm:text-3xl lg:mb-4 ">Our Products</h1>
            <input type="text" className="p-2.5 pl-4 border w-[100%] rounded-[0.7rem] mt-4 mb-4 sm:mb-4 sm:w-[50%] sm:m-[auto] lg:m-[auto] lg:w-[40%] "
                placeholder="Search Products..."/>
            <div className="px-0.5 flex flex-col flex-wrap gap-3 mt-3 sm:flex-row  sm:justify-center lg:flex-row lg:p-4 lg:m-[auto] lg:gap-4 lg:justify-center lg:mt-4">
                <div className="text-center bg-blue-800 text-white p-2.5 rounded-[0.5rem] w-[100%] sm:w-fit sm:pl-10 sm:pr-10 lg:w-fit lg:pl-10 pr-10  ">All</div>
                <div className="text-center bg-gray-300 p-2.5 rounded-[0.5rem] w-[100%] sm:w-fit sm:pl-10 sm:pr-10 lg:w-fit lg:pl-10 pr-10">Electronics</div>
                <div className="text-center bg-gray-300 p-2.5 rounded-[0.5rem] w-[100%] sm:w-fit sm:pl-10 sm:pr-10 lg:w-fit lg:pl-10 pr-10">Clothing</div>
                <div className="text-center bg-gray-300 p-2.5 rounded-[0.5rem] w-[100%] sm:w-fit sm:pl-10 sm:pr-10 lg:w-fit lg:pl-10 pr-10">Home & Furniture</div>
                <div className="text-center bg-gray-300 p-2.5 rounded-[0.5rem] w-[100%] sm:w-fit sm:pl-10 sm:pr-10 lg:w-fit lg:pl-10 pr-10">Beauty and Personal Care</div>
                <div className="text-center bg-gray-300 p-2.5 rounded-[0.5rem] w-[100%] sm:w-fit sm:pl-10 sm:pr-10 lg:w-fit lg:pl-10 pr-10">Toys & Games</div>
                <div className="text-center bg-gray-300 p-2.5 rounded-[0.5rem] w-[100%] sm:w-fit sm:pl-10 sm:pr-10 lg:w-fit lg:pl-10 pr-10">Sports & Outdoors</div>
            </div>
        </div>


    </div>
)
}

export default Hero