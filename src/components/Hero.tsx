"use client";
import React from "react";
import Image from "next/image";
import HeroImage from "@/assets/imags/hero 2.webp";
import { passionOne } from "@/fonts";
import { Navbar } from "./Navbar";
import { Button } from "./button";
import { useAppContext } from "@/context";

export function Hero() {
    const { lang } = useAppContext();
    const data = {
        titleE: "Spend Your Money For Them Who need it most!",
        titleB: "তাদের জন্য আপনার অর্থ ব্যয় করুন যাদের এটি সবচেয়ে বেশি প্রয়োজন!!",
        subtitleE: "give little, help a lot",
        subtitleB: "একটু দিয়ে অনেক সাহায্য করুন",
        buttonTextE: "Donate Now",
        buttonTextB: "দান করুন",
    };
    return (
        <div className="relative w-full">
            <div className="relative tablet:w-screen w-[1500px]  h-[100vh] overflow-hidden ">
                <Image src={HeroImage} alt="Hero Image" priority={true} />
            </div>
            <div className="w-full absolute top-0 left-0 flex items-center h-[100vh]">
                {/* Navbar start*/}
                <div className="absolute top-0 left-0 z-10 w-full">
                    <Navbar />
                </div>
                {/* Navbar End */}

                {/*  */}
                <div className="w-full flex justify-center tablet:pt-24">
                    <div className="flex flex-col items-center">
                        <h1
                            className={`tablet:text-[3.1rem] leading-8 tablet:leading-none text-center w-[90vw] ${passionOne.className} text-white ${lang === "BANGLA" ? "text-[1.7rem]" : "text-[2rem]"}`}
                        >
                            {lang === "ENGLISH" ? data.titleE: data.titleB}
                        </h1>

                        <h3 className=" relative tablet:top-[-10px] tablet:text-[1.5rem] text-[1rem] text-color3 tracking-widest">
                            {lang === "ENGLISH" ? data.subtitleE: data.subtitleB}
                        </h3>
                        <Button>
                            {lang === "ENGLISH" ? data.buttonTextE: data.buttonTextB}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
