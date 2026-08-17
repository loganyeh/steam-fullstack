import { discountsAndEventsData } from "../../../data/gamesData";

function Carousel(){

    return(
        <>
            <div className="hidden lg:block border pb-1 bg-gray-300">
                <div className="flex gap-5 pt-5 pb-7 px-2.5">
                    {discountsAndEventsData.map((game, index) => {
                        return <div key={index} className="relative w-57 shrink-0">
                            <div className="aspect-7/8">
                                <img src={game.img} alt={game.title} className="h-full w-full object-cover" />
                            </div>

                            <div className="flex justify-end font-bold text-xs">
                                <div className="border p-1.5 py-2">-75%</div>
                                <div className="border p-1.5 py-2 line-through">$29.99</div>
                                <div className="border p-1.5 py-2">$7.49</div>
                            </div>

                            <div className="absolute top-0 left-0 -translate-y-1/2 border px-1 py-0.5 font-semibold text-xs">
                                MIDWEEK DEAL
                            </div>
                        </div>
                    })}

                    <div className="grid gap-4 grid-rows-2">
                        {discountsAndEventsData.slice(0, 2).map((game, index) => {
                            return <div key={index} className="relative w-52 shrink-0">
                                <div className="aspect-16/8">
                                    <img src={game.img} alt={game.title} className="h-full w-full object-cover" />
                                </div>

                                <div className="flex justify-end font-bold text-xs">
                                    <div className="border p-1.5 py-2">-75%</div>
                                    <div className="border p-1.5 py-2 line-through">$29.99</div>
                                    <div className="border p-1.5 py-2">$7.49</div>
                                </div>

                                <div className="absolute top-0 left-0 -translate-y-1/2 border px-1 py-0.5 font-semibold text-xs">
                                    MIDWEEK DEAL
                                </div>
                            </div>
                        })}
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default Carousel;