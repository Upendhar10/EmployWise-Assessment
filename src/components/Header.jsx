import React from "react";

import assets from "../assets/assets";

function Header() {
  return (
    <div className="fixed flex min-h-8 w-full items-center justify-between bg-pink-50 px-5">
      <img
        src={assets.employWiseLogo}
        alt="EmployWise"
        className="max-h-[50px]"
      />
      <button className="flex h-full items-center justify-center gap-3 rounded-md bg-fuchsia-400 px-3 py-1 font-bold text-white hover:bg-fuchsia-500">
        LogOut
      </button>
    </div>
  );
}

export default Header;
