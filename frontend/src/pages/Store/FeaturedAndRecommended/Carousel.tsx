import { useState } from "react";
import { featuredAndRecommendedData } from "../../../data/gamesData";

type CarouselProps = {
    currentIndex: number,
};

function Carousel({ currentIndex }: CarouselProps){

    return(
        <>
            <div className="border hidden lg:block gap-3 px-1 w-full max-w-4xl overflow-x-visible">
                <div className="flex aspect-16/6.75">
                    <div className="flex-1">
                        <img src={featuredAndRecommendedData[currentIndex].img} alt="" className="h-full w-full object-cover" />
                    </div>

                    <div className="flex flex-col justify-between px-4 py-3 w-full max-w-[270px] bg-gray-300">
                        <div className="flex gap-1.5 flex-col">
                            <p className="font-bold text-lg line-clamp-1">{featuredAndRecommendedData[currentIndex].title}</p>
                            <p className="text-xs">Very Positive (265,500 Reviews)</p>
                            <div className="grid gap-2.5 grid-cols-2">
                                {Array.from({length: 4}).map((game, index) => {
                                    return <div key={index} className="aspect-video bg-gray-400">

                                    </div>
                                })}
                            </div>
                        </div>

                        <div className="border flex gap-10 flex-col">
                            <p className="text-sm">Recommended because you played similar games</p>

                            <div className="flex justify-end">
                                <div className="px-1.5 py-0.5 w-fit font-medium text-sm bg-gray-400">${featuredAndRecommendedData[currentIndex].price}</div>
                            </div>
                        </div>
                    </div>

                </div>

                {!featuredAndRecommendedData.slice(1, 2).map((game, index) => {
                    return <div key={index} className="flex aspect-16/6.75">
                        <div className="flex-1">
                            <img src={game.img} alt="" className="h-full w-full object-cover" />
                        </div>

                        <div className="flex flex-col justify-between px-4 py-3 w-full max-w-[270px] bg-gray-300">
                            <div className="flex gap-1.5 flex-col">
                                <p className="font-bold text-lg line-clamp-1">{game.title}</p>
                                <p className="text-xs">Very Positive (265,500 Reviews)</p>
                                <div className="grid gap-2.5 grid-cols-2">
                                    {Array.from({length: 4}).map((game, index) => {
                                        return <div key={index} className="aspect-video bg-gray-400">

                                        </div>
                                    })}
                                </div>
                            </div>

                            <div className="border flex gap-10 flex-col">
                                <p className="text-sm">Recommended because you played similar games</p>

                                <div className="flex justify-end">
                                    <div className="px-1.5 py-0.5 w-fit font-medium text-sm bg-gray-400">${game.price}</div>
                                </div>
                            </div>
                        </div>

                    </div>
                })}
            </div>
        </>
    );
};

export default Carousel;