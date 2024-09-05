"use client";
import { useAppContext } from "@/context";
import { passionOne } from "@/fonts";
import React from "react";

export function About() {
    const { lang } = useAppContext();
    const data = {
        textE: `We are the native students of Raigon and nearby villages. We founded "The Magic Makers" foundation to help the impoverished and disadvantaged. Every week, we collect at least 50 Tk from our permanent members and spend it on them, regardless of caste or religion. We want to make our society, country, and the entire globe non-discriminatory, beautiful, and environmentally friendly.`,
        textB: `আমরা রাইগাঁ এবং আশেপাশের গ্রামের স্থানীয় ছাত্র। দরিদ্র এবং সুবিধাবঞ্চিতদের সাহায্য করার জন্য আমরা "The Magic Makers" ফাউন্ডেশন প্রতিষ্ঠা করেছি। প্রতি সপ্তাহে, আমরা আমাদের স্থায়ী সদস্যদের কাছ থেকে কমপক্ষে 50 টাকা সংগ্রহ করি এবং জাতি বা ধর্ম নির্বিশেষে তাদের জন্য ব্যয় করি। আমরা চাই আমাদের সমাজ, দেশ এবং সমগ্র বিশ্বকে বৈষম্যহীন, সুন্দর এবং পরিবেশবান্ধব করতে`,
        headingE: "Who are we?",
        headingB: "আমরা কারা ?",
    };
    return (
        <div className="flex justify-center">
            <div className="tablet:w-[80vw] w-full tablet:rounded-xl flex flex-col items-center bg-color1 py-12">
                <span
                    className={`${passionOne.className} text-gray-200 tablet:text-[1.875rem] text-[1.125rem] tracking-wider`}
                >
                    {lang === "ENGLISH" ? data.headingE : data.headingB}
                </span>
                <span className="text-center text-[0.875rem] tablet:text-[1.25rem] text-color8 tablet:w-[50vw] w-[90vw]">
                    {lang === "ENGLISH" ? data.textE : data.textB}
                </span>
            </div>
        </div>
    );
}
