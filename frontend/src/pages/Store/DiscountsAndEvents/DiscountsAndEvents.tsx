import { useState } from "react";
import { discountsAndEventsData } from "../../../data/gamesData";
import GrayButton from "../../../components/GrayButton";
import Scroll from "./Scroll";
import Carousel from "./Carousel";

function DiscountsAndEvents(){
    const [currentIndex, setCurrentIndex] = useState(0);

    function handleCarousel(direction: string){
        if (direction === "next") {
            if (currentIndex === discountsAndEventsData.length - 1) {
                setCurrentIndex(0);
            } else {
                setCurrentIndex(prev => prev + 1);
            }
        };

        if (direction === "prev") {
            if (currentIndex === 0) {
                setCurrentIndex(discountsAndEventsData.length -1);
            } else {
                setCurrentIndex(prev => prev - 1);
            };
        };
    };

    return(
        <>
            <section className="relative border flex gap-2 flex-col lg:items-center px-2">
                <div className="border flex gap-1.5 flex-col lg:w-full lg:max-w-4xl">
                    <div className="flex justify-between">
                        <p className="font-bold">Discounts & Events</p>
                        <GrayButton className="hidden lg:block" text="See more"/>
                    </div>
                    
                    <Scroll />
                    <Carousel />

                    {/* prev */}
                    <div onClick={() => handleCarousel("prev")} className="hidden border absolute left-0 top-1/2 lg:flex">
                        <i className='bx bxs-chevron-left text-5xl'></i>
                    </div>

                    {/* next */}
                    <div onClick={() => handleCarousel("next")} className="hidden border absolute right-0 top-1/2 lg:flex">
                        <i className='bx bxs-chevron-right text-5xl'></i>
                    </div>

                </div>

                <div className="hidden lg:flex gap-1 justify-center w-full max-w-xs">
                    {discountsAndEventsData.map((game, index) => {
                        return <div key={index} className={`border w-4.5 aspect-video ${currentIndex === index ? "bg-black" : ""} rounded-full`}>
                            
                        </div>
                    })}
                </div>

                <GrayButton className="lg:hidden" text="See more" />
            </section>
        
        </>
    );
};

export default DiscountsAndEvents