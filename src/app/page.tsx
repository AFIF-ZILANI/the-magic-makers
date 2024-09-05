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
            <section id="hero">
                <Hero />
            </section>
            <section id="missions">
                <Missions />
            </section>
            <section id="achivements">
                <Achivements
                    helpedPeople={2747883}
                    totalDonation="436884.00"
                    numberOfMembers={478}
                />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="how-to-contribute">
                <HowToContribute />
            </section>
            <Footer phone="01635364986" email="tauhidrana00@gmail.com" />
        </div>
    );
}
