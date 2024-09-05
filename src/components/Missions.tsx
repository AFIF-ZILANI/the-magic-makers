"use client";

import React from "react";
import Image from "next/image";
import { passeroOne, passionOne } from "@/fonts";
import { useAppContext } from "@/context";
import StudentImage from "@/assets/imags/education.png";
import HealthImage from "@/assets/imags/heath.png";
import FinancialImage from "@/assets/imags/home.png";
import AwarenessImage from "@/assets/imags/awareness.png";
import GiftImage from "@/assets/imags/gift.png";
import BlanketImage from "@/assets/imags/blanket.png";
import TreeImage from "@/assets/imags/tree.png";
import HelpImage from "@/assets/imags/help.png";

const jobList = [
    {
        image: StudentImage,
        textE: "Support students financially in order for them to obtain an education",
        textB: "গরিব শিক্ষার্থীদের শিক্ষা অর্জনের জন্য আর্থিকভাবে সহায়তা করা",

        alt: "education icon",
    },
    {
        image: HealthImage,
        textE: "Provide financial assistance to disadvantaged persons who cannot pay medical costs",
        textB: "গরিব অসহায় ব্যক্তিদের আর্থিক সহায়তা প্রদান করুন যারা চিকিৎসা খরচ বহন করতে পারে না",
        alt: "health care icon",
    },
    {
        image: FinancialImage,
        textE: "Financially helping the poor to provide good and healthy housing and water",
        textB: "দরিদ্রদের ভাল এবং স্বাস্থ্যকর বাসস্থান এবং জল সরবরাহ করতে আর্থিকভাবে সহায়তা করা",
        alt: "home icon",
    },
    {
        image: AwarenessImage,
        textE: "Take numerous awareness actions in the community",
        textB: "সমাজে বিভিন্ন সচেতনতামূলক কার্যক্রম গ্রহণ করা",
        alt: "awareness icon",
    },
    {
        image: GiftImage,
        textE: "Giving gifts to the poor during festivals like Eid, Puja etc",
        textB: "ঈদ, পূজা ইত্যাদি উৎসবে গরীবদের উপহার দেওয়া",
        alt: "gift icon",
    },
    {
        image: BlanketImage,
        textE: "Distributing blankets to the poor during winter",
        textB: "শীতকালে দরিদ্রদের কম্বল বিতরণ",
        alt: "blanket icon",
    },
    {
        image: TreeImage,
        textE: "Conduct and encourage others to plant trees in response to climate change",
        textB: "জলবায়ু পরিবর্তন রোধে গাছ লাগানো এবং অন্যদেরকে উৎসাহিত করা",
        alt: "tree icon",
    },
    {
        image: HelpImage,
        textE: "Helping persons who are disadvantaged in society in a variety of ways",
        textB: "সমাজের সুবিধাবঞ্চিত ব্যক্তিদের বিভিন্ন উপায়ে সাহায্য করা",
        alt: "help icon",
    },
];

export function Missions() {
    const { lang } = useAppContext();
    const data = {
        ourWordE: `“Our ultimate goal will to improve the lifestyles of disadvantaged people while also creating a pollution-free environment”`,
        ourWordB: `"আমাদের চূড়ান্ত লক্ষ্য হবে সুবিধাবঞ্চিত মানুষের জীবনধারা উন্নত করার পাশাপাশি দূষণমুক্ত পরিবেশ তৈরি করা"`,
        jobListHeadingE: "We are currently working on",
        jobListHeadingB: "আমরা বর্তমানে কাজ করছি",
    };
    return (
        <div className="w-full">
            <div className="w-full flex justify-center px-10 pb-6">
                <div className="flex flex-col tablet:w-[700px]">
                    <span className="tablet:text-[1.75rem] text-center">
                        {lang === "ENGLISH" ? data.ourWordE : data.ourWordB}
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
                    {lang === "ENGLISH"
                        ? data.jobListHeadingE
                        : data.jobListHeadingB}
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
                                        {lang === "BANGLA"
                                            ? item.textB
                                            : item.textE}
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
