import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Buttons"; 

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const AdminEmail = "admin@example.com";
  const AdminPassword = "12345";

  const handleLogin = () => {
    if (email === AdminEmail && password === AdminPassword) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
    }
  };

  return (

    <div>
<main className="h-195 bg-[#cfd3db] p-2 sm:p-10 flex justify-center items-center">
      <div className="w-[90%] p-8 rounded-[0.7rem] flex flex-col bg-white shadow-[0_2px_10px_rgb(0,0,0,0.2)] mt-[3rem] sm:w-130 lg:w-115">
        <h1 className="text-[2rem] font-bold text-blue-700 text-center">
          Sign In
        </h1>

        <label htmlFor="email" className="pt-4 pb-1.5">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="border rounded-[0.5rem] p-2 pl-4"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password" className="pt-4 pb-1.5">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="border rounded-[0.5rem] p-2 pl-4"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button
          text="Sign In"
          onClick={handleLogin}
          styling="border rounded-[0.5rem] p-3 mt-[1.5rem] bg-blue-700 text-white font-medium cursor-pointer hover:bg-blue-800 transition"
        />
      </div>
    </main>
    </div>

    
  );
}

export default Signin;
