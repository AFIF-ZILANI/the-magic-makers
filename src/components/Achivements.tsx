import React from "react";
import { passionOne } from "@/fonts";
import Image from "next/image";
import BDTImage from "@/assets/imags/BDT.png";
import MapImage from "@/assets/imags/map.png";
import MemberIcon from "@/assets/imags/member.png";

interface AchivementProp {
    helpedPeople: number;
    numberOfMembers: number;
    totalDonation: string;
    currentLocation: string;
}

export function Achivements({
    helpedPeople,
    numberOfMembers,
    totalDonation,
    currentLocation,
}: AchivementProp) {
    return (
        <div className="w-full">
            <div className="flex justify-center items-center">
                <div className="flex items-center gap-2">
                    <span
                        className={`text-color5 tablet:text-[1.5rem] tet-[1.25rem] ${passionOne.className}`}
                    >
                        Our helped people
                    </span>
                    <span
                        className={`tablet:text-[1.625rem] text-color1 ${passionOne.className} py-[3px] px-3 rounded-[13px] border-[2px] border-color6`}
                    >
                        {helpedPeople}
                    </span>
                </div>
            </div>
            <div className="w-full flex justify-center items-center my-12">
                <div className="w-full tablet:w-[80vw] flex flex-col items-center gap-7 tablet:flex-row tablet:justify-between">
                    {/*  */}
                    {/*  */}
                    {/* Total Doantion Card Start*/}
                    {/*  */}
                    {/*  */}

                    <div className="w-[250px] h-[280px] bg-color7 rounded-[18px] flex flex-col items-center justify-center">
                        <div className="flex flex-col items-center">
                            <div className="w-[76px] h-[49.28px]">
                                <Image src={BDTImage} alt="BDT icon" />
                            </div>
                            <span
                                className={`${passionOne.className} text-[1.75rem] text-white relative -top-3`}
                            >
                                {totalDonation}
                            </span>
                        </div>
                        <span className="text-color8 tablet:text-[1.125rem] text-[0.75rem]">
                            Total donation we collected
                        </span>
                    </div>

                    {/*  */}
                    {/*  */}
                    {/* Total Donation Card End & Current Location Card Star*/}
                    {/*  */}
                    {/*  */}

                    <div className="w-[250px] h-[280px] bg-color7 rounded-[18px] flex flex-col items-center justify-center">
                        <div className="w-[70px] h-[70px]">
                            <Image src={MapImage} alt="map icon" />
                        </div>
                        <span
                            className={`${passionOne.className} text-center text-white tablet:text-[1.4rem] text-[1rem]`}
                        >
                            {currentLocation}
                        </span>
                    </div>

                    {/*  */}
                    {/*  */}
                    {/* Current Location Card End & Permanent Merber Card Start */}
                    {/*  */}
                    {/*  */}

                    <div className="w-[250px] h-[280px] bg-color7 rounded-[18px] flex flex-col items-center justify-center">
                        <div className="flex flex-col items-center">
                            <div className="w-[65px] h-[72.8px]">
                                <Image src={MemberIcon} alt="member icon" />
                            </div>
                            <span
                                className={`${passionOne.className} text-white text-[1.75rem] relative -top-2`}
                            >
                                {numberOfMembers}
                            </span>
                        </div>
                        <span className="text-color8 tablet:text-[1.125rem] text-[0.75rem]">
                            Our total permanent members
                        </span>
                    </div>

                    {/*  */}
                    {/*  */}
                    {/* Permanent Merber Card End*/}
                    {/*  */}
                    {/*  */}
                </div>
            </div>
        </div>
    );
}
