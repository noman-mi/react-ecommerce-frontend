import React from 'react'

function Navbar() {
  return (
    <>

 <footer className="p-6 mt-4 font-Bricolage Grotesque flex flex-col bg-[rgb(0,0,0,0.9)] text-white gap-6">
        <div className="flex flex-col gap-8 sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:justify-center lg:p-4 lg:gap-20">
            <div className="lg:w-[20%]">
                <h1 className="text-2xl font-medium pt-4">E-Commerce</h1>
                <p className="font-light pt-4">Your one-Stop strop for the latest trends in fashions, Electronics and
                    lifestyle. Shop Smart, Shop
                    Easy.</p>
            </div>
            <div>
                <h1 className="text-2xl font-medium">Quick Links</h1>
                <ul className="flex flex-col gap-1.5 pt-4">
                    <li><a href="" className="font-light">Home</a></li>
                    <li><a href="" className="font-light">About</a></li>
                    <li><a href="" className="font-light">Contact</a></li>
                    <li><a href="" className="font-light">Dashboard</a></li>
                </ul>
            </div>
            <div>
                <h1 className="text-2xl font-medium">Customer Service</h1>
                <ul className="flex flex-col gap-1.5 pt-4">
                    <li><a href="" className="font-light">Privacy Policy</a></li>
                    <li><a href="" className="font-light">Terms & Conditions</a></li>
                    <li><a href="" className="font-light">Help & Support</a></li>
                </ul>

            </div>
            <div className="flex flex-col">
                <h1 className="text-2xl font-medium">Contact Us</h1>
                <div className="flex justify-start items-center gap-3 pt-4">
                    <i className="fa-solid fa-location-dot text-[1rem] text-blue-800"></i>
                    <p className="font-light">Lahore,Pakistan</p>
                </div>
                <div className="flex justify-start items-center gap-3  pt-1.5">
                    <i className="fa-solid fa-envelope text-blue-800"></i>
                    <p className="font-light">Support@gmail.com</p>
                </div>
                <div className="flex justify-start items-center gap-3  pt-1.5">
                    <i className="fa-solid fa-phone text-blue-800"></i>
                    <p className="font-light">+92012384848</p>
                </div>
                <div className="flex gap-3 pt-6">
                    <i className="fa-brands fa-facebook-f text-[1.5rem]"></i>
                    <i className="fa-brands fa-instagram text-[1.5rem]"></i>
                    <i className="fa-brands fa-twitter text-[1.5rem]"></i>
                    <i className="fa-brands fa-github text-[1.5rem]"></i>
                </div>
            </div>
        </div>

        <div className="flex flex-col pt-4">
            <hr className="pt-6 opacity-20"></hr>
            <p className="text-center text-[1rem] font-light">&copy; 2025 E-Commerce. All Rights Reserved.</p>
        </div>
    </footer>

    </>
  )
}

export default Navbar