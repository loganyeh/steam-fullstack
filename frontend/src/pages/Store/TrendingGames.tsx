import { trendingGamesTabs, popularNewReleases } from "../../data/gamesData";

function TrendingGames(){

    return(
        <>
            <div className="border px-2">
                {/* Genre Scroll */}
                <div className="flex gap-8 flex-col py-1">
                    {/* Tabs */}
                    <section className="flex gap-1.5 overflow-x-auto">
                        {trendingGamesTabs.map((genre, index) => {
                            return <div key={index} className="border p-2 py-2.5 font-semibold text-sm shrink-0 rounded">
                                {genre}
                            </div>
                        })}
                    </section>
                    
                    {/* Section of Games */}
                    <section className="flex gap-3.5 flex-col">
                        {popularNewReleases.map((game, index) => {
                            return <div key={index}>
                                <div className="aspect-[16/6] bg-gray-300">
                                    <img src={game.img} alt={game.title} className="h-full w-full object-cover"/>
                                </div>

                                <div className="flex items-end p-1.5 pt-2 bg-gray-400">
                                    <div className="flex-1 flex gap-1 flex-col">
                                        <p className="font-semibold text-sm">{game.title}</p>
                                        <p className="font-medium text-xs line-clamp-1">Simulation, Casual, Incremental, Hidden Objectives</p>
                                        <p className="font-medium text-xs">Released: Aug 13, 2026</p>
                                    </div>

                                    <div className="flex font-bold text-xs shrink-0 bg-white">
                                        <div className="border flex justify-center items-center p-1">-10%</div>
                                        <div className="border border-red-600 flex flex-col justify-center items-center p-1">
                                            <p className="line-through">$5.99</p>
                                            <p>$5.39</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        })}
                    </section>
                </div>

                {/* gray buttons */}
                <div className="flex gap-1 flex-col items-end">
                    <p className="font-semibold text-sm">See more:</p>
                    <button className="px-4.5 py-1 font-semibold text-xs bg-gray-300 rounded-sm">Popular New Releases</button>
                    <p className="font-semibold text-sm">or</p>
                    <button className="px-4.5 py-1 font-semibold text-xs bg-gray-300 rounded-sm">All New Releases</button>
                </div>
            </div>
        </>
    );
};

export default TrendingGames;