import React from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";

function About() {
  return (
    <div>
    <Header/>

        <section className="p-7 lg:p-10 lg:pl-30 lg:pr-30">

            <h1 className="font-bold text-center text-[2rem] pb-5">About <span
                    className="text-blue-700 font-bold ">E-Commerce</span></h1>
            <p className="pb-5 text-center text-[1.3rem] font-light">Welcome to E-Commerce, your number one destination for
                high-quality products. We’re dedicated to giving
                you the best shopping experience, focusing on reliability, customer service, and uniqueness.</p>

            <div className="flex flex-col gap-6 pt-8 md:flex md:flex-row">
                <div className="shadow-[0_2px_12px_rgb(0,0,0,0.2)] p-6">
                    <h1 className="text-blue-700 text-2xl font-medium">Our Mission
                    </h1>
                    <p className="pt-4">Our mission is to provide top-quality products at competitive prices while ensuring
                        the best
                        customer experience. We strive to be your most trusted online shopping destination.

                    </p>
                </div>

                <div className="shadow-[0_2px_12px_rgb(0,0,0,0.2)] p-6">
                    <h1 className="text-blue-700 text-2xl font-medium">Our Vision

                    </h1>
                    <p className="pt-4">We aim to revolutionize online shopping by making it effortless, affordable, and
                        enjoyable. Our
                        goal is to bring the best products from around the world right to your doorstep.



                    </p>
                </div>
            </div>
            
            <h1 className="text-center font-bold text-3xl p-8">Why <span className="text-blue-700 font-bold">Choose us?</span></h1>
            <div className="flex flex-col gap-4 md:flex md:flex-row">
                <div className="shadow-[0_2px_12px_rgb(0,0,0,0.2)] p-10">
                    <h1 className="text-center text-blue-700 font-medium text-[1.2rem]">High-Quality Products</h1>
                    <p className="text-center pt-3">We offer a carefully curated selection of premium products.</p>
                </div>
                <div className="shadow-[0_2px_12px_rgb(0,0,0,0.2)] p-10">
                    <h1 className="text-center text-blue-700 font-medium text-[1.2rem]">Excellent Customer Support</h1>
                    <p className="text-center pt-3">Our support team is available 24/7 to assist you.</p>
                </div>
                <div className="shadow-[0_2px_12px_rgb(0,0,0,0.2)] p-10">
                    <h1 className="text-center text-blue-700 font-medium text-[1.2rem]">Fast & Secure Shipping</h1>
                    <p className="text-center pt-3">Get your orders delivered quickly and securely.</p>
                </div>
            </div>

            <div className="flex flex-col p-6 justify-center items-center pt-10">
                <h1 className="text-center text-2xl font-medium">Start Shopping now !</h1>
                <p className="text-center text-[1.2rem] pt-5">Explore our wide range of products and enjoy an amazing shopping experience.</p>
                <button className="rounded-[0.7rem] bg-blue-700 text-white font-medium w-fit p-3 mt-6">Browse Products</button>
            </div>

        </section>
  <Navbar/>
    </div>
  );

}

export default About;
