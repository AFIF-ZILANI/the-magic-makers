import React from "react";
import Image from "next/image";
import { passeroOne, passionOne } from "@/fonts";

import StudentImage from "@/assets/imags/education.png";
import HealthImage from "@/assets/imags/heath.png";
import FinancialImage from "@/assets/imags/home.png";
import AwarenessImage from "@/assets/imags/awareness.png";
import GiftImage from "@/assets/imags/gift.png";
import BlanketImage from "@/assets/imags/blanket.png";
import TreeImage from "@/assets/imags/tree.png";
import HelpImage from "@/assets/imags/help.png";

interface MissionProps {
    ourWord: string;
}

const missionData = [
    {
        image: StudentImage,
        text: "Support students financially in order for them to obtain an education",
        alt: "education icon",
    },
    {
        image: HealthImage,
        text: "Provide financial assistance to disadvantaged persons who cannot pay medical costs",
        alt: "health care icon",
    },
    {
        image: FinancialImage,
        text: "Financially helping the poor to provide good and healthy housing and water",
        alt: "home icon",
    },
    {
        image: AwarenessImage,
        text: "Take numerous awareness actions in the community",
        alt: "awareness icon",
    },
    {
        image: GiftImage,
        text: "Giving gifts to the poor during festivals like Eid, Puja etc",
        alt: "gift icon",
    },
    {
        image: BlanketImage,
        text: "Distributing blankets to the poor during winter",
        alt: "blanket icon",
    },
    {
        image: TreeImage,
        text: "Conduct and encourage others to plant trees in response to climate change",
        alt: "tree icon",
    },
    {
        image: HelpImage,
        text: "Helping persons who are disadvantaged in society in a variety of ways",
        alt: "help icon",
    },
];
export function Missions({ ourWord }: MissionProps) {
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
                <span className={`text-color1 my-4 ${passionOne.className} text-[1.1rem]`}>
                    We are currently working on
                </span>
                <div className="tablet:px-12 w-full">
                    <div className="grid tablet:grid-cols-3 grid-cols-2 w-full">
                        {missionData.map((item, index) => (
                            <div className="p-2" key={index}>
                                <div className="text-center flex flex-col items-center">
                                    <div className="tablet:w-[80px] tablet:h-[80px] w-[50px] h-[50px]">
                                        <Image
                                            src={item.image}
                                            alt={item.alt}
                                        />
                                    </div>
                                    <span className="text-[1rem] tablet:w-[250px]">
                                        {item.text}
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
