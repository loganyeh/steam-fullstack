import { yourRecommendedGamesData } from "../../data/gamesData";
import GrayButton from "../../components/GrayButton";

function YourRecommendedGames(){

    return(
        <>
            <section className="border flex gap-2 flex-col px-2">
                <div className="flex gap-1.5 flex-col">
                    <p className="font-bold">Recommended Based on the Games You Play</p>
                    
                    <div className="flex gap-4 pb-5 overflow-x-auto">
                        {yourRecommendedGamesData.map((game, index) => {
                            return <div key={index} className="w-62 md:w-48 shrink-0">
                                <div className="bg-gray-300 aspect-16/9">
                                    <img src={game.img} alt="" className="h-full w-full object-cover"/>
                                </div>
                                
                                <div className="flex justify-end">
                                    <div className="p-1.5 font-medium text-xs bg-gray-400">Free To Play</div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>

                <GrayButton text="Customize, Explore by Tag, & More" />
            </section>
        
        </>
    );
};

export default YourRecommendedGames;