import { featuredAndRecommendedData } from "../../data/gamesData";
import SendAGiftCard from "./SendAGiftCard";

function FeaturedAndRecommended(){

    return(
        <>
            <section className="border flex gap-1.5 flex-col px-2">
                {/* header */}
                <div className="md:flex md:justify-between md:items-center">
                    <p className="font-bold">Featured & Recommended</p>
                    <div className="hidden md:flex md:justify-end md:w-full md:max-w-[200px]">
                        <SendAGiftCard />
                    </div>
                </div>

                {/* body */}
                <div className="flex gap-3 px-1 pb-4 overflow-x-auto">
                    {featuredAndRecommendedData.slice(0, 2).map((game, index) => {
                        return <div key={index} className="w-80 md:w-168 shrink-0">
                            <div className="aspect-16/9">
                                <img src={game.img} alt="" className="h-full w-full object-cover" />
                            </div>

                            <div className="px-2.5 py-2 bg-gray-300">
                            {/* <div className="border border-blue-600 aspect-16/5 bg-gray-300"> */}
                                <div className="">
                                    <p className="font-bold text-lg line-clamp-1">{game.title}</p>
                                    <p className="text-sm">Available: Aug 27, 2026</p>
                                </div>

                                <div className="flex justify-end">
                                    <div className="px-1.5 py-2 w-fit font-medium text-sm bg-gray-400">${game.price}</div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </section>
        </>
    )
};

export default FeaturedAndRecommended