import React from "react";
import { passionOne } from "@/fonts";

export function HowToContribute() {
    return (
        <div className="pl-[10vw] flex flex-col items-start gap-6 mt-10">
            <div className="flex flex-col relative right-[1rem] tablet:right-0">
                <span
                    className={`${passionOne.className} text-color7 tablet:text-xl text-[1rem]`}
                >
                    {/* How To Contribute? */}
                    কিভাবে অবদান রাখবো ?
                </span>
                {/* <span className="tablet:w-[50vw] tablet:ml-16 tablet:text-[1.125rem] text-[0.75rem]">
                    You can contribute in two ways. These are: donate as much
                    money as possible, participate in our programs in person, or
                    do both. To participate in our programs, you must be a
                    permanent member. Simply{" "}
                    <span className="text-color2">"sign up"</span> with your
                    Gmail account. We will give you notifications for all
                    activity. However, if you merely wish to donate, membership
                    is not required.
                </span> */}
                <span className="tablet:w-[80vw] tablet:text-[1.125rem] text-[0.75rem]">
                    আপনি দুটি উপায়ে অবদান রাখতে পারেন। | এগুলি হল: যতটা সম্ভব
                    অর্থ দান করুন বা ব্যক্তিগতভাবে আমাদের সাথে কার্যক্রমে
                    অংশগ্রহণ করুন বা উভয়ই করুন৷ আমাদের সাথে কার্যক্রমে
                    অংশগ্রহণের জন্য আপনাকে অবশ্যই স্থায়ী সদস্য হতে হবে। | শুধু{" "}
                    <span className="text-color2">"sign up"</span> করুন আপনার
                    জিমেইল অ্যাকাউন্ট দিয়ে। আমরা আপনাকে সমস্ত কার্যকলাপের জন্য
                    বিজ্ঞপ্তি দেব। যাইহোক, আপনি যদি শুধুমাত্র দান করতে চান তবে
                    সদস্যতার প্রয়োজন নেই।
                </span>
            </div>
            <div className="flex flex-col relative right-[1rem] tablet:right-0">
                <span
                    className={`${passionOne.className} text-color7 tablet:text-xl text-[1rem]`}
                >
                    {/* How To Donate? */}
                    কিভাবে দান করবো ?
                </span>
                {/* <span className="tablet:w-[50vw] tablet:ml-16 tablet:text-[1.125rem] text-[0.75rem]">
                    You can contribute money using{" "}
                    <span className="text-[#E8167B]">"Bkash"</span> or{" "}
                    <span className="text-[#E01B19]">"Nagad"</span>. Simply
                    click the <span className="text-color2">"Donate Now"</span>{" "}
                    button, which will take you to the donation page. Then,
                    choose your favourite choice. It will again take you to the
                    operator's official website.
                </span> */}
                <span className="tablet:w-[80vw] tablet:text-[1.125rem] text-[0.75rem]">
                    আপনি <span className="text-[#E8167B]">"বিকাশ"</span> বা{" "}
                    <span className="text-[#E01B19]">"নগদ"</span>ব্যবহার করে
                    অর্থ প্রদান করতে পারেন। শুধু{" "}
                    <span className="text-color2">"Donate Now"</span> বোতামে
                    ক্লিক করুন, যা আপনাকে দান পৃষ্ঠায় নিয়ে যাবে। তারপর, আপনার
                    পছন্দের অপারেটর নির্বাচন করুন. এটি আপনাকে আবার অপারেটরের
                    অফিসিয়াল ওয়েবসাইটে নিয়ে যাবে।| যেখান থেকে আপনি দান করতে
                    পারবেন
                </span>
            </div>
        </div>
    );
}
