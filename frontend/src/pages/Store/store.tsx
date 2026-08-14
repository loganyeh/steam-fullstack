// import game data
import { featuredAndRecommended, discountsAndEvents, yourPersonalCalendar, personalRecommendations,
    gameCat1, trendingGamesTabs, popularNewReleases, browseByCategory, socialMediaIcons
 } from "../../data/gamesData";

// import data
import { footerData } from "../../data/gamesData";

// imported comps
import Header from "./Header";

function Store(){

    // scroll logic
    function handleScroll(){
        console.log(window.scrollY);
    };

    return(
        <> 
            <Header />

            <div onClick={() => handleScroll()} className="border pt-14 pb-32">
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
                {/* <section className="aspect-[16/11.5] bg-blue-300">
                    <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/553850/850e2f9e5bb15c5706bb9a1edc832f4f782e8be5/header.jpg?t=1786525389" alt="Helldivers 2" className="h-full w-full object-cover" />
                </section> */}

                {/* body */}
                <div className="flex gap-7 flex-col">
                    {/* Featured & Recommended */}
                    <section className="border flex gap-1.5 flex-col px-2">
                        <p className="font-bold">Featured & Recommended</p>

                        <div className="flex gap-3 px-1 pb-4 overflow-x-auto">
                        {/* <div className="border border-red-600 flex overflow-x-auto"> */}
                            {featuredAndRecommended.slice(0, 2).map((game, index) => {
                                return <div key={index} className="w-80 shrink-0">
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
                                    {discountsAndEvents.slice(0, 2).map((game, index) => {
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
                    <section className="relative flex justify-end mx-2">
                        <div className="pl-14 py-2 max-w-xs w-full font-semibold bg-blue-400 rounded">
                            Send a Gift Card
                        </div>

                        <img src="https://cdn.akamai.steamstatic.com/store/home/gc_fan.webp" alt="" className="absolute left-0 top-1/2 -translate-y-1/2 h-[115%]" />
                    </section>

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
                                {yourPersonalCalendar.map((game, index) => {
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

                    {/* Trending Games */}
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

                    {/* Browse by Category */}
                    <section className="border flex gap-4 flex-col px-2">
                            <p className="font-bold">Browse by Category</p>

                            <div className="flex gap-3.5 pb-4 overflow-x-auto">
                                {browseByCategory.map((cat, index) => {
                                    return <div key={index} className={`flex justify-center items-center px-4 min-w-44 max-w-52 aspect-8/7 ${cat.img} shrink-0 rounded-xl`}>
                                    {/* return <div key={index} className={`border flex justify-center items-center px-12 pt-20 pb-12 ${cat.img} shrink-0`}> */}
                                        <p className="px-3.5 py-1 font-semibold tracking-wide bg-gray-300 rounded">{cat.category}</p>
                                    </div>
                                })}
                            </div>
                    </section>

                    {/* The Community Recommends */}
                    <section className="border flex gap-3 flex-col px-2">
                        <p className="font-bold">The Community Recommends</p>

                        <div className="flex gap-3 pb-4 overflow-x-auto">
                            {Array.from({length: 2}).map((_, index) => {
                                return <div key={index} className="">
                                    <div className="w-88 aspect-16/7.5 bg-blue-300"></div>

                                    <div className="px-5 pt-3 pb-6 bg-gray-300">
                                        <div className="flex gap-2.5 flex-col">
                                            <p className="font-bold text-lg">Servant of the Lake</p>
                                            <p className="font-medium text-xs line-clamp-4">
                                                "Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                                Itaque rem veniam debitis maxime! Aliquid, quibusdam amet vel suscipit qui, 
                                                consectetur laudantium obcaecati voluptatum quas illum cum, earum iste officiis 
                                                saepe!"
                                            </p>

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

                        <div className="flex justify-end">
                            <button className="px-4.5 py-1 font-semibold text-xs bg-gray-300 rounded-sm">Customize, Explore by Tag, & More</button>
                        </div>
                    </section>

                    {/* Under $10 */}
                    <section className="border flex gap-3 flex-col px-2">
                            <p className="font-bold">Under $10</p>

                            <div className="border flex gap-3.5 pb-3 overflow-x-auto">
                                {Array.from({length: 2}).map((_, index) => {
                                    return <div key={index} className="w-62 shrink-0">
                                        <div className="aspect-16/9.5 bg-gray-300"></div>

                                        <div className="flex justify-end font-bold text-xs">
                                            <div className="border px-1.5 py-1.5">-75%</div>
                                            <div className="border px-0.5 py-1.5 line-through">$29.99</div>
                                            <div className="border px-0.5 py-1.5">$7.49</div>
                                        </div>
                                    </div>
                                })}
                            </div>

                            <div className="border flex flex-col items-end">
                                <p className="font-semibold text-xs">See more:</p>

                                <div className="flex gap-1.5">
                                    {Array.from({length: 2}).map((_, index) => {
                                        return <div key={index} className="flex justify-end">
                                            <button className="px-4.5 py-1 font-semibold text-xs bg-gray-300 rounded-sm">Under $10</button>
                                        </div>
                                    })}
                                </div>
                            </div>
                    </section>
                </div>


                {/* Footer */}
                <footer className="border py-10 px-8">
                    {/* links */}
                    <div className="border grid gap-10 grid-cols-2">
                        {footerData.map((footer, index) => {
                            return <div key={index} className="flex gap-3 flex-col">
                                <p className="font-bold text-sm">{footer.title}</p>

                                {footer.links.map((link, index) => {
                                    return <div key={index} className="font-medium text-sm">
                                        {link}
                                    </div>
                                })}
                            </div>
                        })}
                    </div>

                    {/* STEAM LOGO */}
                    <div className="border flex gap-8 items-center">
                        <div className="flex gap-2.5 items-center">
                            <i className='bx bxl-steam text-4xl'></i>
                            <p className="font-bold text-2xl">STEAM</p>
                        </div>

                        <div className="flex justify-center items-center bg-gray-300">
                            <p className="px-2 font-medium text-xl tracking-widest">VALVE</p>
                        </div>
                    </div>

                    {/* Copyright */}
                    <p className="text-xs">
                        © 2026 Valve Corporation. All rights reserved. 
                        All trademarks are property of their respective 
                        owners in the US and other countries.
                        VAT included in all prices where applicable.
                    </p>

                    {/* Social Media */}
                    <div className="border flex gap-5">
                        {socialMediaIcons.map((icon, index) => {
                            return <div key={index} className="flex justify-center items-center">
                                <i className={`${icon} text-4xl`} ></i>
                            </div>
                        })}
                    </div> 

                    {/* Button */}
                    <button className="border px-4 py-2 font-medium text-sm bg-blue-400 text-white rounded-sm">Get Mobile Apps</button>
                </footer>

                {/* Note */}
                <div className="flex gap-5 flex-col text-xs">
                    <p>
                        We don't have any recommendations to show you here.
                        This might be an error, or it might be that you don't have any playtime on record.
                        You can hit refresh, or come back once you've played a game.
                    </p>

                    <p>
                        Perhaps you'd like to check out a random game?
                    </p>
                </div>

            </div>
        </>
    );
};

export default Store;