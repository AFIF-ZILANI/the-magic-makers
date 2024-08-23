import React from "react";
import { passionOne } from "@/fonts";

export function HowToContribute() {
    return (
        <div className="pl-[10vw] flex flex-col items-start gap-6 mt-10">
            <div className="flex flex-col">
                <span
                    className={`${passionOne.className} text-color7 tablet:text-xl text-[1rem]`}
                >
                    How To Contribute?
                </span>
                <span className="tablet:w-[50vw] tablet:ml-16 tablet:text-[1.125rem] text-[0.75rem]">
                    You can contribute in two ways. These are: donate as much
                    money as possible, participate in our programs in person, or
                    do both. To participate in our programs, you must be a
                    permanent member. Simply{" "}
                    <span className="text-color2">"sign up"</span> with your
                    Gmail account. We will give you notifications for all
                    activity. However, if you merely wish to donate, membership
                    is not required.
                </span>
            </div>
            <div className="flex flex-col">
                <span
                    className={`${passionOne.className} text-color7 tablet:text-xl text-[1rem]`}
                >
                    How To Donate?
                </span>
                <span className="tablet:w-[50vw] tablet:ml-16 tablet:text-[1.125rem] text-[0.75rem]">
                    You can contribute money using{" "}
                    <span className="text-[#E8167B]">"Bkash"</span> or{" "}
                    <span className="text-[#E01B19]">"Nagad"</span>. Simply
                    click the <span className="text-color2">"Donate Now"</span>{" "}
                    button, which will take you to the donation page. Then,
                    choose your favourite choice. It will again take you to the
                    operator's official website.
                </span>
            </div>
        </div>
    );
}
