import React from "react";
import Image from "next/image";
import Logo from "@/assets/imags/logo.png";
import Link from "next/link";
import { ToggoleLang } from "./ToggoleLang";

export function Navbar() {
    return (
        <div className="flex p-3 items-center select-none">
            <div className="relative tablet:w-[70px] w-[44px] tablet:h-[73.75px] h-[40.23px] hover:cursor-pointer">
                <Link href="#hero" passHref>
                    <Image src={Logo} alt="logo icon" />
                </Link>
            </div>
            <div className="justify-center w-[90%] hidden tablet:flex">
                <div className="flex gap-14 text-[1.15rem] text-gray-800 mr-20">
                    <Link href="#missions" passHref>
                        <span className="hover:cursor-pointer">Missons</span>
                    </Link>
                    <Link href="#achivements" passHref>
                        <span className="hover:cursor-pointer">
                            Achivements
                        </span>
                    </Link>
                    <Link href="#about" passHref>
                        <span className="hover:cursor-pointer">About</span>
                    </Link>
                    <Link href="#how-to-contribute" passHref>
                        <span className="hover:cursor-pointer">
                            How to Contribute
                        </span>
                    </Link>
                    <ToggoleLang />
                </div>
            </div>
        </div>
    );
}
