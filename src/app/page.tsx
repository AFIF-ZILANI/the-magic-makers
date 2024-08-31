import React from "react";
import { Hero } from "@/components/Hero";
import { Missions } from "@/components/Missions";
import { Achivements } from "@/components/Achivements";
import { About } from "@/components/About";
import { HowToContribute } from "@/components/HowToContribute";
import { Footer } from "@/components/Footer";
import StudentImage from "@/assets/imags/education.png";
import HealthImage from "@/assets/imags/heath.png";
import FinancialImage from "@/assets/imags/home.png";
import AwarenessImage from "@/assets/imags/awareness.png";
import GiftImage from "@/assets/imags/gift.png";
import BlanketImage from "@/assets/imags/blanket.png";
import TreeImage from "@/assets/imags/tree.png";
import HelpImage from "@/assets/imags/help.png";

const missionData = [
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
export default function Page() {
    return (
        <div className="w-full overflow-x-hidden flex flex-col gap-8">
            {/* <Hero
                buttonText="Donate Now"
                title="Spend Your Money For Them Who need it most!"
                subtitle="give little, help a lot"
            /> */}
            <section id="hero">
                <Hero
                    buttonText="দান করুন"
                    title="তাদের জন্য আপনার অর্থ ব্যয় করুন যাদের এটি সবচেয়ে বেশি প্রয়োজন!!"
                    subtitle="একটু দিয়ে অনেক সাহায্য করুন"
                    bangla={true}
                />
            </section>
            {/* <Missions ourWord="“Our ultimate goal will to improve the lifestyles of disadvantaged people while also creating a pollution-free environment”" /> */}
            <section id="missions">
                <Missions
                    jobList={missionData}
                    language="bangla"
                    jobListHeading=""
                    ourWord={`"আমাদের চূড়ান্ত লক্ষ্য হবে সুবিধাবঞ্চিত মানুষের জীবনধারা উন্নত করার পাশাপাশি দূষণমুক্ত পরিবেশ তৈরি করা"`}
                />
            </section>
            <section id="achivements">
                <Achivements
                    helpedPeople={2747883}
                    totalDonation="436884.00"
                    numberOfMembers={478}
                    // currentLocation="Raigon, Mohadevpur, Naogaon, Bangladesh"
                    currentLocation="রাইগাঁ, মহাদেবপুর, নওগাঁ, বাংলাদেশ"
                />
            </section>
            {/* <About aboutUs={`We are the native students of Raigon and nearby villages. We founded "The Magic Makers" foundation to help the impoverished and disadvantaged. Every week, we collect at least 50 Tk from our permanent members and spend it on them, regardless of caste or religion. We want to make our society, country, and the entire globe non-discriminatory, beautiful, and environmentally friendly.`}/> */}
            <section id="about">
                <About
                    aboutUs={`আমরা রাইগাঁ এবং আশেপাশের গ্রামের স্থানীয় ছাত্র। দরিদ্র এবং সুবিধাবঞ্চিতদের সাহায্য করার জন্য আমরা "The Magic Makers" ফাউন্ডেশন প্রতিষ্ঠা করেছি। প্রতি সপ্তাহে, আমরা আমাদের স্থায়ী সদস্যদের কাছ থেকে কমপক্ষে 50 টাকা সংগ্রহ করি এবং জাতি বা ধর্ম নির্বিশেষে তাদের জন্য ব্যয় করি। আমরা চাই আমাদের সমাজ, দেশ এবং সমগ্র বিশ্বকে বৈষম্যহীন, সুন্দর এবং পরিবেশবান্ধব করতে`}
                />
            </section>
            <section id="how-to-contribute">
                <HowToContribute />
            </section>
            <Footer phone="01635364986" email="tauhidrana00@gmail.com" />
        </div>
    );
}
