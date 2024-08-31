"use client";
import { passionOne } from "@/fonts";
import React from "react";
import { useRouter } from "next/navigation";

export function Button({ buttonText }: { buttonText: string }) {
    const router = useRouter();
    return (
        <button
            className={`tablet:mt-[10rem] mt-[8rem] w-[130px] h-[40px] tablet:w-[150px] tablet:h-[50px] bg-color1 rounded-lg ${passionOne.className} text-white tablet:text-[1.5rem] text-[1.275rem]`}
            onClick={() => router.push("/donation")}
        >
            {buttonText}
        </button>
    );
}
