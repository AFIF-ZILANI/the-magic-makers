import React from "react";
import Image from "next/image";
import Logo from "@/assets/imags/logo.png";

export function Navbar() {
  return (
    <div className="flex p-3 items-center">
      <div className="relative tablet:w-[70px] w-[40px] tablet:h-[73.75px] h-[36.23px] hover:cursor-pointer">
        <Image src={Logo} alt="logo icon" />
      </div>
      <div className="flex justify-center w-[90%]">
        <div className="flex gap-14 text-[1.15rem] text-gray-800 mr-20">
          <span className="hover:cursor-pointer">Missons</span>
          <span className="hover:cursor-pointer">Achivements</span>
          <span className="hover:cursor-pointer">About</span>
          <span className="hover:cursor-pointer">How to Contribute</span>
          <span className="hover:cursor-pointer">En</span>
          <span className="hover:cursor-pointer">Sign up</span>
        </div>
      </div>
    </div>
  );
}
