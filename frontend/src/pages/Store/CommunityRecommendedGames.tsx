import GrayButton from "../../components/GrayButton";

function CommunityRecommendedGames(){

    return(
        <>
            <section className="border flex gap-3 flex-col px-2">
                <p className="font-bold">The Community Recommends</p>

                <div className="flex gap-3 pb-4 overflow-x-auto">
                    {Array.from({length: 2}).map((_, index) => {
                        return <div key={index} className="border">
                            <div className="w-88 md:w-184 aspect-16/7.5 bg-blue-300"></div>

                            <div className="px-5 pt-3 pb-6 bg-gray-300">
                                <div className="flex gap-2.5 md:gap-2 flex-col">
                                    <p className="font-bold text-lg">Servant of the Lake</p>
                                    <p className="font-medium text-xs line-clamp-4">
                                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Itaque rem veniam debitis maxime! Aliquid, quibusdam amet vel suscipit qui, 
                                        consectetur laudantium obcaecati voluptatum quas illum cum, earum iste officiis 
                                        saepe!"
                                    </p>

                                    <div className="hidden border md:flex justify-center">
                                        <p className="font-medium text-sm">Read Entire Review</p>
                                    </div>

                                    <div className="border flex gap-2 items-start">
                                        <div className="w-10 aspect-square bg-gray-700"></div>

                                        <div>
                                            <p className="font-bold text-xs">Hanni</p>
                                            <p className="text-[11px]">Played 8.1 hrs at review time</p>
                                            <p className="text-[11px]">14 people found this review helpful</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-end font-bold text-xs">
                                    <div className="border p-1.5 py-1">-75%</div>
                                    <div className="border p-1.5 py-1 line-through">$29.99</div>
                                    <div className="border p-1.5 py-1">$7.49</div>
                                </div>

                            </div>
                        </div>
                    })}
                </div>

                <GrayButton text="Customize, Explore by Tag, & More" />
            </section>
        
        </>
    );
};

export default CommunityRecommendedGames;