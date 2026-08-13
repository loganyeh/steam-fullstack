// import game data
import { featuredGames, midweekDeals, personalCalendar, personalRecommendations,
    gameCat1, genreTabs, popularNewReleases, browseByCategory
 } from "../../data/gamesData";

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

                <div className="flex gap-7 flex-col">
                    {/* Featured & Recommended */}
                    {/* either do my-2 or pt-2 */}
                    <section className="border flex gap-1.5 flex-col px-2">
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
                    <section className="border flex gap-2 flex-col px-2">
                        <div className="flex gap-1.5 flex-col">
                            <p className="font-bold">Discounts & Events</p>
                            
                            <div className="pb-1 bg-gray-300">
                                <div className="flex gap-5 pt-5 pb-7 px-2.5 overflow-x-auto">
                                    {midweekDeals.slice(0, 2).map((game, index) => {
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
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <button className="px-4.5 py-1 font-semibold text-xs bg-gray-300 rounded-sm">See More</button>
                        </div>
                    </section>

                    {/* Send a Gift Card */}
                    <section className="border flex justify-center items-center mx-2 py-2 font-semibold text-white bg-blue-400 rounded">Send a Gift Card</section>

                    {/* Your Personal Calendar */}
                    <section className="border flex gap-2 flex-col px-2">
                        <div className="flex gap-4 flex-col">
                            {/* section header */}
                            <div>
                                <div className="flex gap-2 items-center">
                                    <div className="flex justify-center items-center px-2 py-1 font-semibold text-xs bg-blue-400 text-white rounded">NEW</div>
                                    <p className="font-bold">Your Personal Calendar</p>
                                </div>

                                <p className="text-xs">A personalized-for-you list of new and upcoming games</p>
                            </div>

                            <div className="flex gap-1.5 pb-2 overflow-x-auto">
                                {personalCalendar.map((game, index) => {
                                    return <div key={index} className="border flex gap-2 flex-col pt-1 px-2 pb-2.5 w-25 shrink-0">
                                        <div className="flex gap-2 justify-center items-center text-xs">
                                            <p>{game.day}</p>
                                            <p className="font-bold">{game.date}</p>
                                        </div>

                                        <div className="flex gap-2 flex-col">
                                            {game.img.map((img, index) => {
                                                return <div key={index} className="aspect-[9/11]">
                                                    <img src={img} alt="" className="h-full w-full object-cover" />
                                                </div>
                                            })}
                                        </div>
                                    </div>
                                })}
                            </div>       
                        </div>

                        <div className="flex justify-end">
                            <button className="px-4.5 py-1 font-semibold text-xs bg-gray-300 rounded-sm">Explore your full Personal Calendar</button>
                        </div>
                    </section>

                    {/* Recommended Based on the Games You Play */}
                    <section className="border flex gap-2 flex-col px-2">
                        <div className="flex gap-1.5 flex-col">
                            <p className="font-bold">Recommended Based on the Games You Play</p>
                            
                            <div className="flex gap-4 pb-5 overflow-x-auto">
                                {personalRecommendations.map((game, index) => {
                                    return <div key={index} className="w-62 shrink-0">
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

                        <div className="flex justify-end">
                            <button className="px-4.5 py-1 font-semibold text-xs bg-gray-300 rounded-sm">Customize, Explore by Tag, & More</button>
                        </div>
                    </section>
                    
                    {/* Explore Your Discovery Queue */}
                    <section className="px-2 bg-gray-300 aspect-[16/7]"></section>

                    {/* Category Games */}
                    <section className="border flex gap-2 flex-col px-2">
                        <div className="flex gap-2 flex-col">
                            {/* section header */}
                            <div>
                                <p className="font-bold">SPORTS GAMES</p>
                                <p className="text-xs">Featured tag</p>
                            </div>

                            <div className="grid gap-3 grid-cols-2 p-1.5 bg-gray-300">
                                {gameCat1.map((game, index) => {
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

                        <div className="flex justify-end">
                            <button className="px-4.5 py-1 font-semibold text-xs bg-gray-300 rounded-sm">See More</button>
                        </div>
                    </section>

                    {/* Game Genres */}
                    <div className="border px-2">
                        {/* Genre Scroll */}
                        <div className="flex gap-8 flex-col py-1">
                            {/* Tabs */}
                            <section className="flex gap-1.5 overflow-x-auto">
                                {genreTabs.map((genre, index) => {
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

                    {/* Browse by Category */}
                    <section className="border flex gap-2 flex-col px-2">
                        <div className="">
                            <p className="font-bold">Recommended Based on the Games You Play</p>

                            <div className="flex gap-3 overflow-x-auto">
                                {browseByCategory.map((cat, index) => {
                                    return <div key={index} className="border flex justify-center items-center px-12 pt-20 pb-12 shrink-0">
                                        <p className="px-3.5 py-1 font-semibold tracking-wide bg-gray-300 rounded">{cat}</p>
                                    </div>
                                })}
                            </div>
                            
                        </div>
                    </section>


                </div>

            </div>
        </>
    );
};

export default Store;