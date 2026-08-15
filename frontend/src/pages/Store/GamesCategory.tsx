import type { GamesCategoryType } from "../../data/gamesData";
import GrayButton from "../../components/GrayButton";

type GamesCategoryProps = {
    section: string,
    gameData: GamesCategoryType[]
};

function GamesCategory({ section, gameData }: GamesCategoryProps ){

    return(
        <>
            <section className="border flex gap-2 flex-col px-2">
                <div className="flex gap-2 flex-col">
                    {/* section header */}
                    <div>
                        <p className="font-bold">{section} GAMES</p>
                        <p className="text-xs">Featured tag</p>
                    </div>

                    <div className="grid gap-3 grid-cols-2 p-1.5 bg-gray-300">
                        {gameData.map((game, index) => {
                            return <div key={index} className="shrink-0">
                                <img src={game.img} alt={game.title} className="aspect-[16/6] object-cover"/>

                                <div className="flex justify-end font-bold text-xs">
                                    <div className="border px-1.5 py-1.5">-75%</div>
                                    <div className="border px-0.5 py-1.5 line-through">$29.99</div>
                                    <div className="border px-0.5 py-1.5">$7.49</div>
                                </div>
                            </div>
                        })}
                    </div>       
                </div>

                <GrayButton text="See more" />
            </section>
        </>
    );
};

export default GamesCategory;