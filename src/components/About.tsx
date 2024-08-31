import { passionOne } from "@/fonts";
import React from "react";

export function About({ aboutUs }: { aboutUs: string }) {
    return (
        <div className="flex justify-center">
            <div className="tablet:w-[80vw] w-full tablet:rounded-xl flex flex-col items-center bg-color1 py-12">
                <span
                    className={`${passionOne.className} text-gray-200 tablet:text-[1.875rem] text-[1.125rem] tracking-wider`}
                >
                    {/* Who are We? */}
                    আমরা কারা ?
                </span>
                <span className="text-center text-[0.875rem] tablet:text-[1.25rem] text-color8 tablet:w-[50vw] w-[90vw]">
                    {aboutUs}
                </span>
            </div>
        </div>
    );
}
