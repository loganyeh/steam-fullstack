import { useState } from "react";
import { featuredAndRecommendedData } from "../../../data/gamesData";
import SendAGiftCard from "../SendAGiftCard";
import Scroll from "./Scroll";
import Carousel from "./Carousel";

function FeaturedAndRecommended(){
    const [currentIndex, setCurrentIndex] = useState(0);

    function handleCarousel(direction: string){
        if (direction === "next") {
            if (currentIndex === featuredAndRecommendedData.length - 1) {
                setCurrentIndex(0);
            } else {
                setCurrentIndex(prev => prev + 1);
            }
        };

        if (direction === "prev") {
            if (currentIndex === 0) {
                setCurrentIndex(featuredAndRecommendedData.length -1);
            } else {
                setCurrentIndex(prev => prev - 1);
            };
        };
    };

    return(
        <>
            <section className="border-2 border-red-600 relative flex gap-1.5 flex-col lg:items-center px-2">
                {/* header */}
                <div className="border md:flex md:justify-between md:items-center lg:w-full lg:max-w-4xl">
                    <p className="font-bold">Featured & Recommended</p>
                    <div className="hidden md:flex md:justify-end md:w-full md:max-w-[200px]">
                        <SendAGiftCard />
                    </div>
                </div>

                {/* body */}
                <Scroll />
                <Carousel currentIndex={currentIndex} />

                {/* prev */}
                <div onClick={() => handleCarousel("prev")} className="hidden border absolute left-0 top-1/2 lg:flex">
                    <i className='bx bxs-chevron-left text-5xl'></i>
                </div>

                {/* next */}
                <div onClick={() => handleCarousel("next")} className="hidden border absolute right-0 top-1/2 lg:flex">
                    <i className='bx bxs-chevron-right text-5xl'></i>
                </div>

                <div className="hidden lg:flex gap-1 justify-center w-full max-w-xs">
                    {featuredAndRecommendedData.map((game, index) => {
                        return <div key={index} className={`border w-4.5 aspect-video ${currentIndex === index ? "bg-black" : ""} rounded-full`}>
                            
                        </div>
                    })}
                </div>


            </section>
        </>
    )
};

export default FeaturedAndRecommended