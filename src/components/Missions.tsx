import React from "react";
import Image, { StaticImageData } from "next/image";
import { passeroOne, passionOne } from "@/fonts";


interface MissionProps {
    ourWord: string;
    jobList: {image: StaticImageData, textE: string, textB: string, alt: string}[];
    language: "english" | "bangla";
    jobListHeading: string;
}

export function Missions({ ourWord, jobList, language, jobListHeading }: MissionProps) {
    return (
        <div className="w-full">
            <div className="w-full flex justify-center px-10 pb-6">
                <div className="flex flex-col tablet:w-[700px]">
                    <span className="tablet:text-[1.75rem] text-center">
                        {ourWord}
                    </span>
                    <span
                        className={`${passeroOne.className} text-color4 text-center text-[1.2rem] mt-4`}
                    >
                        --The Magic Makers
                    </span>
                </div>
            </div>
            <div className="bg-color3 flex flex-col items-center px-4 pb-8 pt-5">
                <span
                    className={`text-color1 tablet:my-4 my-6 ${passionOne.className} tablet:text-[1.1rem] text-[1.2rem]`}
                >
                    {/* We are currently working on */}
                    {/* আমরা বর্তমানে কাজ করছি */}
                    {jobListHeading}
                </span>
                <div className="tablet:px-12 w-full">
                    <div className="grid tablet:grid-cols-3 grid-cols-2 w-full">
                        {jobList.map((item, index) => (
                            <div className="p-2" key={index}>
                                <div className="text-center flex flex-col items-center">
                                    <div className="tablet:w-[80px] tablet:h-[80px] w-[50px] h-[50px]">
                                        <Image
                                            src={item.image}
                                            alt={item.alt}
                                        />
                                    </div>
                                    <span className="tablet:text-[1rem] text-xs tablet:w-[250px] mt-1">
                                        {language === "bangla" ? item.textB: item.textE}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
