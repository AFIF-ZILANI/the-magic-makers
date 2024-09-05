"use client";

import React from "react";
import { passionOne } from "@/fonts";
import { useAppContext } from "@/context";

export function HowToContribute() {
    const { lang } = useAppContext();
    return (
        <div className="pl-[10vw] flex flex-col items-start gap-6 mt-10">
            <div className="flex flex-col relative right-[1rem] tablet:right-0">
                <span
                    className={`${passionOne.className} text-color7 tablet:text-xl text-[1rem]`}
                >
                    {lang === "ENGLISH"
                        ? "How To Contribute?"
                        : "কিভাবে অবদান রাখবো ?"}
                </span>
                <span className="tablet:w-[80vw] tablet:text-[1.125rem] text-[0.75rem]">
                    {lang === "ENGLISH"
                        ? `You can contribute in two ways. These are: donate as much
                    money as possible, participate in our programs in person, or
                    do both. To participate in our programs, you must be a
                    permanent member. Simply`
                        : `আপনি দুটি উপায়ে অবদান রাখতে পারেন। | এগুলি হল: যতটা সম্ভব
                    অর্থ দান করুন বা ব্যক্তিগতভাবে আমাদের সাথে কার্যক্রমে
                    অংশগ্রহণ করুন বা উভয়ই করুন৷ আমাদের সাথে কার্যক্রমে
                    অংশগ্রহণের জন্য আপনাকে অবশ্যই স্থায়ী সদস্য হতে হবে। | শুধু`}{" "}
                    <span className="text-color2">&quot;sign up&quot;</span>{" "}
                    {lang === "ENGLISH"
                        ? `with your
                    Gmail account. We will give you notifications for all
                    activity. However, if you merely wish to donate, membership
                    is not required.`
                        : `করুন আপনার
                    জিমেইল অ্যাকাউন্ট দিয়ে। আমরা আপনাকে সমস্ত কার্যকলাপের জন্য
                    বিজ্ঞপ্তি দেব। যাইহোক, আপনি যদি শুধুমাত্র দান করতে চান তবে
                    সদস্যতার প্রয়োজন নেই।`}
                </span>
            </div>
            <div className="flex flex-col relative right-[1rem] tablet:right-0">
                <span
                    className={`${passionOne.className} text-color7 tablet:text-xl text-[1rem]`}
                >
                    {lang === "ENGLISH"
                        ? "How To Donate?"
                        : "কিভাবে দান করবো ?"}
                </span>
                <span className="tablet:w-[80vw] tablet:text-[1.125rem] text-[0.75rem]">
                    {lang === "ENGLISH"
                        ? "You can contribute money using"
                        : "আপনি"}{" "}
                    <span className="text-[#E8167B]">
                        {lang === "ENGLISH" ? `"Bkash"` : `"বিকাশ"`}
                    </span>{" "}
                    {lang === "ENGLISH" ? "or" : "বা"}{" "}
                    <span className="text-[#E01B19]">
                        {lang === "ENGLISH" ? "Nagad" : `"নগদ"`}
                    </span>
                    {lang === "ENGLISH"
                        ? `. Simply
                    click the `
                        : `ব্যবহার করে
                    অর্থ প্রদান করতে পারেন। শুধু`}{" "}
                    <span className="text-color2">&quot;Donate Now&quot;</span>{" "}
                    {lang === "ENGLISH"
                        ? `button, which will take you to the donation page. Then,
                    choose your favourite choice. It will again take you to the
                    operator's official website.`
                        : `বোতামে
                    ক্লিক করুন, যা আপনাকে দান পৃষ্ঠায় নিয়ে যাবে। তারপর, আপনার
                    পছন্দের অপারেটর নির্বাচন করুন. এটি আপনাকে আবার অপারেটরের
                    অফিসিয়াল ওয়েবসাইটে নিয়ে যাবে।| যেখান থেকে আপনি দান করতে
                    পারবেন`}
                </span>
            </div>
        </div>
    );
}
