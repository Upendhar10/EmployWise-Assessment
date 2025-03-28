import React, { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import FormInput from "../components/FormInput";
import { LOGIN_API } from "../constants";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(LOGIN_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();
      console.log(data);

      if (data.token) {
        localStorage.setItem("token", data.token);
        toast.success("Login successful");
        navigate("/home/usersList");
      } else {
        toast.error(data.error || "Invalid credentials");
      }
    } catch (error) {
      toast.error("Something went wrong! Please try again.", error);
    }
  };

  return (
    <div className="grid h-screen place-content-center gap-5">
      <div className="text-2xl">
        <h2 className="py-2 font-bold">Welcome back!</h2>
        <p className="text-base text-gray-500">
          Enter your email and password.
        </p>
      </div>
      <form
        className="flex min-w-[300px] flex-col gap-4"
        onSubmit={handleLogin}
      >
        <FormInput
          icon={<MdOutlineEmail />}
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          icon={<RiLockPasswordLine />}
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="flex items-center justify-center gap-3 rounded-md bg-green-600 px-8 py-2 font-bold text-white hover:bg-green-500"
        >
          LOGIN <FaArrowRight />
        </button>
      </form>
    </div>
  );
}

export default Login;
