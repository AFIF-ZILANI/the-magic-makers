import React from "react";
import Image from "next/image";
import HeroImage from "@/assets/imags/hero 2.webp";
import { passionOne } from "@/fonts";
import { Navbar } from "./Navbar";

export function Hero({
  title,
  subtitle,
  buttonText,
}: {
  title: string;
  subtitle: string;
  buttonText: string;
}) {
  return (
    <div className="relative w-full">
      <div className="absolute top-0 left-0 z-10 w-full">
        <Navbar />
      </div>
      <div className="absolute z-10 top-[200px] w-full flex flex-col items-center">
        <h1
          className={`tablet:text-[3.1rem] text-[2.1875rem] text-center ${passionOne.className} text-white`}
        >
          {title}
        </h1>
        <h3 className=" relative top-[-10px] text-[1.5rem] text-color3 tracking-widest">
          {subtitle}
        </h3>
        <button
          className={`relative top-[10rem] w-[130px] h-[40px] tablet:w-[150px] tablet:h-[50px] bg-color1 rounded-lg ${passionOne.className} text-white tablet:text-[1.5rem] text-[1.375rem]`}
        >
          {buttonText}
        </button>
      </div>
      <div className="relative w-screen laptop:h-[100vh] overflow-hidden ">
        <Image src={HeroImage} alt="Hero Image" priority={true} />
      </div>
    </div>
  );
}
