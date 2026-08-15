import { useState, useEffect } from "react";
// imported comps
import Header from "./Header";
import Footer from "./Footer";
import MenuDropdown from "./MenuDropdown";
import SpotlightGame from "./SpotlightGame";
import FeaturedAndRecommended from "./FeaturedAndRecommended";
import DiscountsAndEvents from "./DiscountsAndEvents";
import SendAGiftCard from "./SendAGiftCard";
import YourPersonalCalendar from "./YourPersonalCalendar";
import YourRecommendedGames from "./YourRecommendedGames";
import DiscoveryQueue from "./DiscoveryQueue";
import GamesCategory from "./GamesCategory";
import TrendingGames from "./TrendingGames";
import BrowseByCategory from "./BrowseByCategory";
import CommunityRecommendedGames from "./CommunityRecommendedGames";
import Under10Games from "./Under10Games";

// import data
import { sportsGames } from "../../data/gamesData";

function Store(){
    const [toggleMenuDropdown, setToggleMenuDropdown] = useState(false);

    useEffect(() => {
        let prevScroll = 0;
    
        function handleScroll() {
            const currentScroll = window.scrollY;
    
            if (currentScroll <= 400) {
                setToggleMenuDropdown(false);
            } else if (currentScroll < prevScroll) {
                // scrolling up
                setToggleMenuDropdown(false);
            } else if (currentScroll > prevScroll) {
                // scrolling down
                setToggleMenuDropdown(true);
            }
    
            prevScroll = currentScroll;
        }
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    
    return(
        <> 
            <Header />

            <div className="border pt-14 pb-32">
                {/* Menu Dropdown & Wishlist */}
                {!toggleMenuDropdown && <MenuDropdown />}

                <SpotlightGame />

                {/* body */}
                <div className="flex gap-7 flex-col mt-[46px]">
                    <FeaturedAndRecommended />
                    <DiscountsAndEvents />
                    <SendAGiftCard />
                    <YourPersonalCalendar />
                    <YourRecommendedGames />
                    <DiscoveryQueue />
                    <GamesCategory section="SPORTS" gameData={sportsGames} />
                    <TrendingGames />
                    <BrowseByCategory />
                    <CommunityRecommendedGames />
                    <Under10Games />
                </div>

                <Footer />

                {/* Note */}
                <div className="flex gap-5 flex-col px-2 text-xs">
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