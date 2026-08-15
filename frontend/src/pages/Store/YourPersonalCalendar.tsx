import GrayButton from "../../components/GrayButton";
import { yourPersonalCalendarData } from "../../data/gamesData";

function YourPersonalCalendar(){

    return(
        <>
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
                        {yourPersonalCalendarData.map((game, index) => {
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

                <GrayButton text="Explore your full Personal Calendar" />
            </section>
        </>
    );
};

export default YourPersonalCalendar;