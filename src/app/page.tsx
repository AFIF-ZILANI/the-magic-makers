import React from "react";
import { Hero } from "@/components/Hero";
import { Missions } from "@/components/Missions";
import { Achivements } from "@/components/Achivements";
import { About } from "@/components/About";
import { HowToContribute } from "@/components/HowToContribute";
import { Footer } from "@/components/Footer";

export default function Page() {
    return (
        <div className="w-full overflow-x-hidden flex flex-col gap-8">
            <Hero
                buttonText="Donate Now"
                title="Spend Your Money For Them Who need it most!"
                subtitle="give little, help a lot"
            />
            <Missions ourWord="“Our ultimate goal will to improve the lifestyles of disadvantaged people while also creating a pollution-free environment”" />
            <Achivements
                helpedPeople={2747883}
                totalDonation="436884.00"
                numberOfMembers={478}
                currentLocation="Raigon, Mohadevpur, Naogaon, Bangladesh"
            />
            <About aboutUs={`We are the native students of Raigon and nearby villages. We founded "The Magic Makers" foundation to help the impoverished and disadvantaged. Every week, we collect at least 50 Tk from our permanent members and spend it on them, regardless of caste or religion. We want to make our society, country, and the entire globe non-discriminatory, beautiful, and environmentally friendly.`}/>
            <HowToContribute />
            <Footer phone="01635364986" email="tauhidrana00@gmail.com"/>
        </div>
    );
}
