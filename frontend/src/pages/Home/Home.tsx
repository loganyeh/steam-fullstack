
import { useState } from "react";

// import games data
import { featuredGames, midweekDeals, personalCalendar,
    yourRecommendations, gameCat1, gameCat2, under10,
    popularNewReleases, communityRecommends
 } from "../../data/gamesData";

function Home(){
    const [isCart, setIsCart] = useState(false);
    const gameCategories = [
        "Popular New Releases", "Top Sellers", "Popular Upcoming", 
        "Specials", "Trending Free"
    ];
    const browseByCategory = [
        "VISUAL NOVEL", "ANIME", "CO-OPERATIVE", "PUZZLE", "VR TITLES", 
        "RACING", "FREE TO PLAY", "GREAT ON DECK", "CASUAL", "HORROR",
        "SURVIVAL", "ROGUE-LIKE", "STORY-RICH", "ADVENTURE", "OPEN WORLD",
        "ALL SPORTS", "CITY & SETTLEMENT", "SCI-FI & CYBERPUNK", "ACTION", "ROLE-PLAYING"
    ];
    const footerData = [
        {
            title: "STEAM",
            data: [
                "About Steam", "Steam SSA", "Steamworks", "Steam Distribution", "Gift Cards",
            ]
        },
        {
            title: "VALVE",
            data: [
                "About Valve", "Jobs", "Hardware", "Recycling",
            ]
        },
        {
            title: "LEGAL",
            data: [
                "Privacy", "Accessibility", "Notices & Policies", "Cookies", "Refunds",
            ]
        },
        {
            title: "MORE", 
            data: [
                "Get Steam", "Get Mobile Apps", "Get Support", "My Account"
            ]
        },
    ];

    return(
        <>
            {/* <div className="pt-16 h-900"> */}
            <div className="pt-16 pb-32 bg-[rgb(15,25,36)] text-white">
                {/* Search Bar */}
                <section className="fixed z-10 top-0 left-0 flex gap-5 justify-between items-center px-2 py-3.5 w-full bg-[rgb(23,26,33)]">
                    {/* menu */}
                    <div className="flex justify-center items-center">
                        <i className='bx bx-menu text-4xl text-white' ></i>
                    </div>

                    {/* search bar */}
                    <div className="flex justify-between h-9 w-full max-w-xs">
                        <input type="search" placeholder="Search the store" className="border border-[rgb(81,83,88)] pl-3 w-full bg-[rgb(52,55,61)] placeholder:font-light placeholder:text-xs placeholder:italic placeholder:text-white" />

                        <div className="flex justify-center items-center aspect-square bg-[rgb(26,159,255)]">
                            <i className='bx bx-search text-xl text-white' ></i>
                        </div>
                    </div>
                </section>

                {/* menu & wishlist & cart */}
                <section className="flex justify-between px-3 py-2 bg-gradient-to-r from-[rgb(21,32,47)] to-[rgb(21,24,30)] text-white">
                    {/* menu */}
                    <div className="flex gap-1 items-center">
                        <p className="font-semibold text-sm">Menu</p>
                        <div className="flex justify-center items-center">
                            <i className='bx bx-chevron-down' ></i>
                        </div>
                    </div>

                    <div className="flex gap-5">
                        {/* wishlist */}
                        <div className="flex gap-1 items-center">
                            <div>
                                <i className='bx bxs-star' ></i>
                            </div>
                            <p className="text-xs">Wishlist</p>
                        </div>

                        {/* cart */}
                        {isCart && <div className="flex gap-1 justify-center items-center px-2 py-1.5 bg-[rgb(25,159,255)]">
                            <i className='bx bxs-cart' ></i>
                            <p className="text-xs">Cart</p>
                            <p className="text-[10px]">1</p>
                        </div>}
                    </div>
                </section> 

                {/* Featured & Recommended */}
                <section className="flex gap-2 flex-col p-2">
                    <h1 className=" font-bold">Featured & Recommended</h1>

                    <div className="flex gap-4 pb-5 overflow-x-scroll">
                        {featuredGames.map((game, index) => {
                            return <div key={index} className="flex flex-col w-80 aspect-10/9 shrink-0">
                                <div className="h-48 bg-blue-400">
                                    <img src={game.img} alt="" className="h-full w-full object-cover"/>
                                </div>

                                <div className="flex-1 flex gap-1 flex-col p-2 bg-[rgb(26,44,62)]">
                                    <div className="">
                                        <p className="font-bold text-lg tracking-wide">{game.title}</p>
                                        <div className="flex gap-1 text-xs">
                                            <p className="text-[rgb(101,191,243)]">{game.reviewRating}</p>
                                            <p>({game.reviewCount} Reviews)</p>
                                        </div>
                                    </div>

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

                {/* Discounts & Events */}
                <section className="flex gap-2 flex-col p-2">
                    <h1 className=" font-bold">Discounts & Events</h1>

                    <div className="flex gap-4 px-3 pt-3 pb-11 bg-[rgb(26,44,62)] overflow-x-scroll">
                        {midweekDeals.map((game, index) => {
                            return <div key={index} className="relative flex flex-col justify-end h-75 w-60 shrink-0">
                                <div className="absolute -top-2 left-0 p-1 font-semibold text-xs bg-gradient-to-r from-[rgb(97,14,93)] to-[rgb(183,37,90)]">MIDWEEK DEAL</div>
                                <div className="bg-blue-400 h-66">
                                    <img src={game.img} alt={game.title} className="h-full w-full object-cover"/>
                                </div>
                                <div className="flex justify-end">
                                    <div className="flex justify-center items-center px-1 h-8 font-semibold text-sm bg-[rgb(161,205,68)] text-black">Up to -80%</div>
                                </div>
                            </div>
                        })}
                    </div>

                    <div className="flex justify-end">
                        <button className="px-4.5 py-1 w-fit text-xs font-semibold bg-[rgb(204,204,204)] text-black rounded-sm">See More</button>
                    </div>
                </section>

                {/* Send a Gift Card */}
                <section className="h-11">
                    <div className="flex justify-center items-center mx-2 h-full bg-gradient-to-r from-[rgb(16,42,59)] to-[rgb(48,155,210)] rounded">
                        <p className="font-semibold">Send a Gift Card</p>
                    </div>
                </section>

                {/* Your Personal Calendar */}
                <section className="flex gap-4 flex-col p-2">
                    <div className="flex gap-1 flex-col">
                        <div className="flex items-center gap-2">
                            <div className="flex justify-center items-center px-2 py-0.5 font-medium text-sm bg-[rgb(26,159,255)] rounded-md">NEW</div>
                            <p className="font-semibold">Your Personal Calendar</p>
                        </div>

                        <p className="text-xs">A personalized-for-you list of new and upcoming games</p>
                    </div>

                    <div className="flex gap-1.5 pb-4 overflow-x-scroll">
                        {personalCalendar.map((date, index) => {
                            return <div key={index} className="flex gap-2 flex-col pt-1 px-2 pb-3 h-auto w-26 bg-gradient-to-b from-[rgb(30,81,131)] to-[rgb(25,42,63)] shrink-0">
                                <div className="flex gap-2 justify-center items-center text-xs">
                                    <p>{date.day}</p>
                                    <p className="font-semibold">{date.date}</p>
                                </div>

                                <div className="flex flex-col gap-3">
                                    {date.img.map((img, index) => {
                                        return <div key={index} className="h-26 bg-gray-300">
                                            <img src={img} alt="" className="h-full w-full object-cover"/>
                                        </div>
                                    })}
                                </div>
                            </div>
                        })}
                    </div>

                    <div className="flex justify-end">
                        <button className="px-4.5 py-1 w-fit text-xs font-semibold bg-[rgb(204,204,204)] text-black rounded-sm">Explore your full Personal Calendar</button>
                    </div>
                </section>

                {/* Recommended Based on the Games You Play */}
                <section className="flex gap-2 flex-col p-2">
                    <h1 className=" font-bold">Recommended Based on the Games You Play</h1>

                    <div className="flex gap-4 pb-5 overflow-x-scroll">
                        {yourRecommendations.map((game, index) => {
                            return <div key={index} className="h-auto w-64 shrink-0">
                                <div className="h-36 bg-gray-300">
                                    <img src={game.img} alt={game.title} className="h-full w-full object-cover" />
                                </div>
                                
                                <div className="flex justify-end h-8">
                                    <div className="flex justify-center items-center px-1.5 text-xs bg-[rgb(11,19,27)] rounded">{game.price}</div>
                                </div>
                            </div>
                        })}
                    </div>

                    <div className="flex justify-end">
                        <button className="px-4.5 py-1 w-fit text-xs font-semibold bg-[rgb(204,204,204)] text-black rounded-sm">Customize, Explore by Tag, & More</button>
                    </div>
                </section>

                {/* Explore Your Discovery Queue */}
                <section className="px-2">
                    <div className="flex flex-col justify-center px-3 aspect-16/7 bg-gradient-to-r from-[rgb(88,49,109)] to-[rgb(52,98,128)]">
                        <p className="font-bold text-lg">Explore Your Discovery Queue</p>
                        <p className="font-light text-xs">Click to open your queue of top-selling, new, and recommended titles</p>
                    </div>
                </section>

                {/* Sports Games */}
                <section className="flex gap-2 flex-col p-2">
                    <div>
                        <h1 className="font-bold">SPORTS GAMES</h1>
                        <p className="text-xs text-gray-300">Featured tag</p>
                    </div>

                    <div className="grid gap-5 grid-cols-2 p-2.5 h-56 bg-[rgb(26,44,63)]">
                        {gameCat1.map((game, index) => {
                            return <div key={index} className="flex flex-col">
                                <div className="h-16 bg-gray-300">
                                    <img src={game.img} alt={game.title} className="h-full w-full object-cover"/>
                                </div>

                                <div className="flex-1 flex justify-end">
                                    <div className="flex justify-center items-center px-0.5 font-semibold text-sm bg-[rgb(161,205,68)] text-black">-95%</div>
                                    <div className="flex justify-center items-center px-0.5 text-sm bg-[rgb(19,31,46)] text-[rgb(129,139,144)] line-through">$49.99</div>
                                    <div className="flex justify-center items-center px-0.5 text-sm bg-[rgb(19,31,46)]">$2.49</div>
                                </div>
                            </div>
                        })}
                    </div>

                    <div className="flex justify-end">
                        <button className="px-4.5 py-1 w-fit text-xs font-semibold bg-[rgb(204,204,204)] text-black rounded-sm">See More</button>
                    </div>
                </section>
                
                {/* Games Cats */}
                <section className="flex gap-6 flex-col px-2">
                    <div className="flex gap-2 pb-1 overflow-x-scroll">
                        {gameCategories.map((cat, index) => {
                            return <div key={index} className={`px-2 py-3 font-semibold text-sm bg-[rgb(21,31,41)] text-[rgb(183,185,188)] shrink-0 rounded ${index === 0 ? "border-b-3 border-[rgb(26,159,255)] bg-[rgb(21,76,101)] text-white" : ""}`}>
                                {cat}
                            </div>
                        })}
                    </div>

                    <div className="flex gap-3 flex-col">
                        {popularNewReleases.map((game, index) => {
                            return <div key={index} className="flex flex-col h-53">
                                <div className="h-34 bg-gray-300">
                                    <img src={game.img} alt={game.title} className="h-full w-full object-cover"/>
                                </div>

                                <div className="flex-1 flex px-1.5 pb-1.5 pt-2 bg-[rgb(38,53,69)]">
                                    <div className="flex-1 flex gap-1 flex-col">
                                        <p className="text-sm">{game.title}</p>
                                        <div className="flex gap-1 text-xs">
                                            {game.genres.map((genre, index) => {
                                                return <p key={index} className="text-[rgb(212,215,218)]">{genre}</p>
                                            })}

                                        </div>
                                        <p className="text-xs text-[rgb(147,154,162)]">Released: Aug 10, 2026</p>
                                    </div>

                                    <div className="flex justify-end items-end text-xs">
                                        <div className="flex justify-center items-center px-0.5 h-8 font-semibold bg-[rgb(161,205,68)] text-black">-95%</div>
                                        <div className="flex justify-center items-center px-1 h-8 bg-[rgb(19,31,46)]">$2.49</div>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>

                    <div className="flex gap-1 flex-col">
                        <div className="flex gap-1 flex-col items-end">
                            <p className="text-sm">See more:</p>
                            <button className="px-4.5 py-1 w-fit text-xs font-semibold bg-[rgb(204,204,204)] text-black rounded-sm">Popular New Releases</button>
                        </div>

                        <div className="flex gap-1 flex-col items-end">
                            <p className="text-sm">or</p>
                            <button className="px-4.5 py-1 w-fit text-xs font-semibold bg-[rgb(204,204,204)] text-black rounded-sm">All New Releases</button>
                        </div>
                    </div>
                </section>

                {/* Browse by Category */}
                <section className="flex gap-2 flex-col px-2">
                    <h1 className="font-bold">Browse by Category</h1>

                    <div className="flex gap-4 pb-1 overflow-x-scroll">
                        {browseByCategory.map((cat, index) => {
                            return <div key={index} className="border flex justify-center items-center h-40 w-48 bg-gray-300 rounded-xl shrink-0">
                                <div className="flex justify-center items-center px-2.5 py-1 font-semibold bg-white text-black rounded-lg">
                                    {cat}
                                </div>
                            </div>
                        })}
                    </div>
                </section>

                {/* The Community Recommends */}
                <section className="flex gap-2 flex-col p-2">
                        <h1 className="font-bold">The Community Recommends</h1>

                        <div className="flex gap-2 pb-4 overflow-x-scroll">
                            {communityRecommends.map((game, index) => {
                                return <div key={index} className="flex flex-col h-104 w-89 bg-[rgb(12,20,29)] shrink-0">
                                    <div className="h-48 bg-black">
                                        <div className="h-42 bg-gray-300">
                                            <img src={game.img} alt={game.title} className="h-full w-full object-cover" />
                                        </div>
                                    </div>

                                    <div className="flex-1 flex gap-2 flex-col px-5 py-3">
                                        <p className="font-semibold text-lg">{game.title}</p>

                                        <p className="text-sm line-clamp-3">
                                            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum aut nihil ad nisi itaque, 
                                            deleniti reiciendis amet aliquid maxime officia aperiam dolorem esse nobis fugiat ut 
                                            asperiores temporibus, eius labore."
                                        </p>

                                        <div className="flex gap-2">
                                            <div className="w-10 h-10 bg-blue-400"></div>

                                            <div className="text-[10px]">
                                                <p className="font-semibold text-xs">anon</p>
                                                <p>played 4.7 hrs at reviwe time</p>
                                                <p>9 people found this helpful</p>
                                            </div>
                                        </div>

                                        <div className="flex-1 flex justify-end items-center">
                                            <div className="flex justify-center items-center px-0.5 h-6 font-semibold text-sm bg-[rgb(161,205,68)] text-black">-95%</div>
                                            <div className="flex justify-center items-center px-0.5 h-6 text-sm bg-[rgb(19,31,46)] text-[rgb(129,139,144)] line-through">$49.99</div>
                                            <div className="flex justify-center items-center px-1 h-6 text-sm bg-[rgb(19,31,46)]">$2.49</div>
                                        </div>

                                        
                                    </div>
                                </div>
                            })}
                        </div>
                        

                        <div className="flex justify-end">
                            <button className="px-4.5 py-1 w-fit text-xs font-semibold bg-[rgb(204,204,204)] text-black rounded-sm">Customize, Explore by Tags, & More</button>
                        </div>
                </section>

                {/* Under $10 */}
                <section className="flex gap-2 flex-col p-2">
                        <h1 className="font-bold">Under $10</h1>

                        <div className="flex gap-3.5 pb-4 overflow-x-scroll">
                            {under10.map((game, index) => {
                                return <div key={index} className="h-45 w-60 shrink-0">
                                    <div className="h-36">
                                        <img src={game.img} alt={game.title} className="h-full w-full object-cover"/>
                                    </div>

                                    <div className="flex justify-end">
                                        <p className="flex justify-center items-center p-2 text-xs bg-[rgb(12,20,29)]">$9.99</p>
                                    </div>
                                </div>
                            })}
                        </div>
                        
                        <div className="flex flex-col">
                            <div className="flex justify-end">
                                <p className="font-medium text-xs">See more:</p>
                            </div>

                            <div className="flex gap-1 justify-end">
                                <div className="flex justify-end">
                                    <button className="px-4.5 py-1 w-fit text-xs font-semibold bg-[rgb(204,204,204)] text-black rounded-sm">Under $10</button>
                                </div>
                                <div className="flex justify-end">
                                    <button className="px-4.5 py-1 w-fit text-xs font-semibold bg-[rgb(204,204,204)] text-black rounded-sm">Under $5</button>
                                </div>
                            </div>
                        </div>
                </section>

                {/* Footer */}
                <footer className="flex gap-10 flex-col mt-12">
                    <div className="grid gap-x-8 gap-y-10 grid-cols-2 px-10">
                        {footerData.map((data, index) => {
                            return <div key={index} className="flex gap-3 flex-col">
                                <p className="font-semibold text-sm">{data.title}</p>
                                {data.data.map((subtext, index) => {
                                    return <div key={index} className="text-sm text-[rgb(139,146,154)]">
                                        {subtext}
                                    </div>
                                })}
                            </div>
                        })}
                    </div>

                    <div className="flex gap-8 items-center px-10">
                        <div className="flex gap-1 justify-center items-center text-[rgb(139,146,154)]">
                            <div className="flex justify-center items-center">
                                <i className='bx bxl-steam text-5xl'></i>
                            </div>

                            <p className="font-semibold text-2xl">STEAM</p>
                        </div>

                        <div className="flex justify-center items-center bg-[rgb(139,146,154)]">
                            <p className="px-3 py-0 font-semibold text-2xl text-[rgb(15,25,36)]">VALVE</p>
                        </div>
                        
                    </div>

                    <p className="px-10 text-[10px] text-[rgb(171,177,183)]">
                        © 2026 Valve Corporation. All rights reserved. 
                        All trademarks are property of their respective owners in the US and other countries.
                        VAT included in all prices where applicable.
                    </p>

                    <div className="flex gap-6 px-10 text-[rgb(139,146,154)] text-3xl">
                        <i className='bx bxl-youtube' ></i>
                        <i className='bx bxl-twitter' ></i>
                        <i className='bx bxl-facebook-circle' ></i>
                        <i className='bx bxl-tiktok'></i>
                    </div>

                    <button className="mx-10 px-4.5 py-2.5 w-fit text-sm bg-[rgb(26,159,255)] rounded-sm">Get Mobile Apps</button>

                    <div className="px-2 text-xs text-gray-300">
                        <p>
                            We don't have any recommendations to show you here.
                            This might be an error, or it might be that you don't have any playtime on record.
                            You can hit refresh, or come back once you've played a game.
                        </p>

                        <p className="mt-4">
                            Perhaps you'd like to check out a random game?
                        </p>
                    </div>

                </footer>

            </div>
        </>
    );
};

export default Home;