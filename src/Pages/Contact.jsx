import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Cards from "../Components/Cards";

function Contact() {
  return (
    <div>
      <Header/>
        <main className="bg-[#F3F4F6] p-2 sm:p-10 flex justify-center items-center">
        <form id="frm" className="w-[90%] p-8 rounded-[0.7rem] flex flex-col bg-white shadow-[0_2px_10px_rgb(0,0,0,0.2)] mt-[3rem] mr-[1.5rem] ml-[1.5rem] sm:w-130">
            <h1 className="text-[2rem] font-bold text-blue-700 text-center">Contact Us</h1>
            <p className="text-[1rem] text-center pt-4">Have any questions? Feel free to reach out to us!</p>

            <label for="email" className="pt-4 pb-1.5">Your Email</label>
            <input type="email" name="" id="email" className="border rounded-[0.5rem] p-2 pl-4" placeholder="Email here"></input>

            <label for="text" className="pt-4 pb-1.5">Subject</label>
            <input type="text" name="" id="subject" className="border rounded-[0.5rem] p-2 pl-4" placeholder="Subject here"></input>

            <label for="textarea" className="pt-4 pb-1.5">Your Message</label>
            <textarea name="" id="message" placeholder="Write your message here..." cols="6" rows="4" className="border  rounded-[0.5rem] pl-4 pt-2"></textarea>

            <button className="border  rounded-[0.5rem] p-3 mt-[1.5rem] bg-blue-700 text-white font-medium">Send Message</button>
        </form>
    </main>
    <Navbar/>
    </div>
  );
}

export default Contact;
