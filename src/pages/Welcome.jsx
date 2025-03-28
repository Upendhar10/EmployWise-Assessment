import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="grid h-screen w-screen place-content-center gap-1">
      <img
        src="https://5.imimg.com/data5/SELLER/Default/2023/9/348957520/MJ/OR/ME/2602238/employwise-software-500x500.jpeg"
        alt="EmployWise"
        className="w-[250px]"
      />
      <Link to={"/login"}>
        <button className="mx-auto flex items-center justify-center gap-3 rounded-md bg-green-600 px-8 py-2 font-bold text-white hover:bg-green-500">
          Get Started <FaArrowRight />
        </button>
      </Link>
    </div>
  );
}

export default Welcome;
