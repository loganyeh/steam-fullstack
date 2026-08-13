import { featuredGames } from "../../data/gamesData";

function Featured(){

    return(
        <>
            <section className="flex gap-2 flex-col px-2">
                {/* section name */}
                <h1 className=" font-bold">Featured & Recommended</h1>

                {/* game scroll */}
                <div className="flex gap-3 overflow-x-scroll">
                    {featuredGames.slice(0, 2).map((game, index) => {
                        return <div key={index} className="border flex flex-col w-[80vw] min-w-80 aspect-[10/9] shrink-0">
                            <div className="aspect-video bg-blue-400">
                            {/* <div className="h-48 bg-blue-400"> */}
                                <img src={game.img} alt="" className="h-full w-full object-cover"/>
                            </div>

                            <div className="flex gap-1 flex-col p-2 bg-[rgb(26,44,62)]">
                                {/* game name & reviews */}
                                <div className="">
                                    <p className="font-bold text-lg tracking-wide">{game.title}</p>
                                    <div className="flex gap-1 text-xs">
                                        <p className="text-[rgb(101,191,243)]">{game.reviewRating}</p>
                                        <p>({game.reviewCount} Reviews)</p>
                                    </div>
                                </div>

                                {/* pricing */}
                                <div className="flex-1 flex justify-end">
                                    <div className="flex justify-center items-center px-0.5 h-8 font-semibold text-sm bg-[rgb(161,205,68)] text-black">-95%</div>
                                    <div className="flex justify-center items-center px-0.5 h-8 text-sm bg-[rgb(19,31,46)] text-[rgb(129,139,144)] line-through">$49.99</div>
                                    <div className="flex justify-center items-center px-0.5 h-8 text-sm bg-[rgb(19,31,46)]">$2.49</div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </section>
        </>
    );
};

export default Featured;