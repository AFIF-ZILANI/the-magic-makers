import React from "react";
import Image from "next/image";
import InstagramImage from "@/assets/imags/instagram.png";
import FacebookImage from "@/assets/imags/facebook.png";
import XImage from "@/assets/imags/x.png";
import ZerodImage from "@/assets/imags/zerod.png";

export function Footer({ phone, email }: { phone: string; email: string }) {
    return (
        <div className="bg-color7 tablet:pt-[9rem] pt-10 tablet:pb-2 pb-4 mt-4">
            <div className="w-full flex justify-center">
                <div className="flex tablet:w-[50vw] w-[70vw] justify-between">
                    <div className="flex flex-col items-center">
                        <span className="text-color2 text-[0.75rem] tablet:text-base">
                            Action
                        </span>
                        <span className="text-color3 text-[0.5rem] tablet:text-sm hover:cursor-pointer">
                            Hero
                        </span>
                        <span className="text-color3 text-[0.5rem] tablet:text-sm hover:cursor-pointer">
                            Missions
                        </span>
                        <span className="text-color3 text-[0.5rem] tablet:text-sm hover:cursor-pointer">
                            Achivements
                        </span>
                        <span className="text-color3 text-[0.5rem] tablet:text-sm hover:cursor-pointer">
                            About
                        </span>
                        <span className="text-color3 text-[0.5rem] tablet:text-sm hover:cursor-pointer">
                            How to cotribute
                        </span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-[0.75rem] tablet:text-base text-color2">
                            Contact With Us
                        </span>
                        <span className="text-[0.5rem] text-color3 tablet:text-sm">
                            Phone: +88{phone}
                        </span>
                        <span className="text-[0.5rem] text-color3 tablet:text-sm">
                            Email: {email}
                        </span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-xs tablet:text-base text-color2">
                            Social Presence
                        </span>
                        <div className="flex gap-2 mt-1">
                            <div className="w-4 h-4 tablet:w-[20px] tablet:h-[20px]">
                                <Image
                                    src={InstagramImage}
                                    alt="instagram icon"
                                />
                            </div>
                            <div className="w-4 h-4 tablet:w-[20px] tablet:h-[20px]">
                                <Image
                                    src={FacebookImage}
                                    alt="facebook icon"
                                />
                            </div>
                            <div className="w-4 h-4 tablet:w-[20px] tablet:h-[20px]">
                                <Image src={XImage} alt="x icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="flex w-full justify-center">
                    <div className="flex items-center gap-1">
                        <span className="text-[0.5rem] text-color2 tablet:text-xs">
                            Powered by
                        </span>
                        <div className="w-[30px] h-[10.56px] tablet:w-[55px] tablet:h-[19.37px]">
                            <Image src={ZerodImage} alt="zerod logo" />
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center my-3">
                    <div className="w-[90vw] h-[1px] bg-color6"></div>
                </div>
                <div className="w-full flex justify-center">
                    <div className="tablet:w-[95vw] w-[80vw] flex justify-between">
                        <span className="tablet:text-base text-[0.5rem] text-color5">
                            Privacy Policy
                        </span>
                        <span className="tablet:text-base text-[0.5rem] text-color5">
                            Terms & Conditions
                        </span>
                        <span className="tablet:text-base text-[0.5rem] text-color5">
                            2024 © The Magic Makers
                        </span>
                        <span className="tablet:text-base text-[0.5rem] text-color5">
                            Contact Us
                        </span>
                        <span className="tablet:text-base text-[0.5rem] text-color5">
                            FAQs
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
