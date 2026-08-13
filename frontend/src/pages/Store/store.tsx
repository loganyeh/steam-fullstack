// import game data
import { featuredGames, midweekDeals } from "../../data/gamesData";

function Store(){

    return(
        <> 
            <div className="h-1200">

                {/* Search & Menu */}
                <section className="border flex justify-between items-center px-2 py-2.5">
                    {/* menu */}
                    <div className="flex justify-center items-center">
                        <i className='bx bx-menu text-4xl'></i>
                    </div>

                    {/* search */}
                    <div className="border flex justify-end items-center w-full min-w-[290px]">
                        <input type="text" placeholder="Search the store" className="px-2 py-1.5 w-full italic text-sm" />
                        
                        <div className="flex justify-center items-center p-1.5 bg-blue-400">
                            <i className='bx bx-search text-xl text-white' ></i>
                        </div>
                    </div>

                </section>

                {/* Menu Dropdown & Wishlist */}
                <section className="border flex justify-between px-2 py-3">
                    {/* menu dropdown */}
                    <div className="flex items-center">
                        <p className="font-bold text-sm">Menu</p>
                        <i className='bx bx-chevron-down text-lg'></i>
                    </div>

                    {/* wishlist */}
                    <div className="flex gap-1 items-center">
                        <i className='bx bxs-star' ></i>
                        <p className="font-semibold text-xs">Wishlist</p>
                    </div>

                </section>

                {/* Game Update Thumbnail */}
                <section className="aspect-[16/11.5] bg-blue-300">
                    <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/553850/850e2f9e5bb15c5706bb9a1edc832f4f782e8be5/header.jpg?t=1786525389" alt="Helldivers 2" className="h-full w-full object-cover" />
                </section>

                {/* Featured & Recommended */}
                {/* either do my-2 or pt-2 */}
                <section className="border flex gap-1.5 flex-col my-2 px-2">
                    <p className="font-bold">Featured & Recommended</p>

                    <div className="flex gap-3 px-1 pb-4 overflow-x-auto">
                    {/* <div className="border border-red-600 flex overflow-x-auto"> */}
                        {featuredGames.slice(0, 2).map((game, index) => {
                            return <div key={index} className="w-80 shrink-0">
                                <div className="aspect-16/9">
                                    <img src={game.img} alt="" className="h-full w-full object cover" />
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

                    {/* <div className="border border-red-600 px-2 overflow-x-auto">
                        {featuredGames.slice(0, 1).map((game, index) => {
                            return <div key={index} className="">
                                <div className="border aspect-16/8.5">

                                </div>

                                <div className="border border-blue-600 aspect-16/5">

                                </div>
                            </div>
                        })}
                    </div> */}
                </section>

                {/* Discounts & Events */}
                <section className="border flex gap-1.5 flex-col my-2 px-2">
                    <p className="font-bold">Discounts & Events</p>
                    
                    <div className="border pb-1">
                        <div className="border border-red-600 flex gap-5 p-3 pb-10 overflow-x-auto">
                            {midweekDeals.slice(0, 2).map((game, index) => {
                                return <div key={index} className="border border-blue-600 w-57 shrink-0">
                                    <div className="aspect-8/9">
                                        <img src={game.img} alt={game.title} className="h-full w-full object-cover" />
                                    </div>

                                    <div className="flex justify-end font-bold text-xs">
                                        <div className="border p-1.5">-75%</div>
                                        <div className="border p-1.5 line-through">$29.99</div>
                                        <div className="border p-1.5">$7.49</div>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>

                </section>

            </div>
        </>
    );
};

export default Store;