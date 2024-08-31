import React from "react";
import Image from "next/image";
import HeroImage from "@/assets/imags/hero 2.webp";
import { passionOne } from "@/fonts";
import { Navbar } from "./Navbar";
import { Button } from "./button";

export function Hero({
    title,
    subtitle,
    buttonText,
    bangla,
}: {
    title: string;
    subtitle: string;
    buttonText: string;
    bangla: boolean;
}) {
    return (
        <div className="relative w-full">
            <div className="relative tablet:w-screen w-[1500px]  h-[100vh] overflow-hidden ">
                <Image src={HeroImage} alt="Hero Image" priority={true} />
            </div>
            <div className="absolute top-0 left-0 flex items-center h-[100vh]">
                {/* Navbar start*/}
                <div className="absolute top-0 left-0 z-10 w-full">
                    <Navbar />
                </div>
                {/* Navbar End */}

                {/*  */}
                <div className="w-full flex flex-col items-center tablet:pt-24">
                    <h1
                        className={`tablet:text-[3.1rem] leading-8 tablet:leading-none text-center w-[95vw] ${passionOne.className} text-white ${bangla ? "text-[1.7rem]" : "text-[2rem]"}`}
                    >
                        {title}
                    </h1>

                    <h3 className=" relative tablet:top-[-10px] tablet:text-[1.5rem] text-[1rem] text-color3 tracking-widest">
                        {subtitle}
                    </h3>

                    <Button buttonText={buttonText} />
                </div>
            </div>
        </div>
    );
}
