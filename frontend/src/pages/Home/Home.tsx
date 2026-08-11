

function Home(){

    return(
        <>
            {/* <div className="pt-16 h-900"> */}
            <div className="pt-16 h-900 bg-[rgb(15,25,36)] text-white">
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

                {/* menu & wishlist */}
                <section className="flex justify-between px-3 py-2 bg-gradient-to-r from-[rgb(21,32,47)] to-[rgb(21,24,30)] text-white">
                    <div className="flex gap-1 items-center">
                        <p className="font-semibold text-sm">Menu</p>
                        <div className="flex justify-center items-center">
                            <i className='bx bx-chevron-down' ></i>
                        </div>
                    </div>

                    <div className="flex gap-1 items-center">
                        <div>
                            <i className='bx bxs-star' ></i>
                        </div>
                        <p className="text-xs">Wishlist</p>
                    </div>
                </section> 

                {/* Featured & Recommended */}
                <section className="flex gap-2 flex-col p-2">
                    <h1 className=" font-bold">Featured & Recommended</h1>

                    <div className="flex gap-4 pb-5 overflow-x-scroll">
                        {Array.from({length: 2}).map((_, index) => {
                            return <div key={index} className="flex flex-col w-80 aspect-10/9 shrink-0">
                                <div className="aspect-16/9 bg-blue-400">
                                {/* <div className="border h-48"> */}

                                </div>

                                <div className="flex-1 bg-[rgb(26,44,62)]">

                                </div>
                            </div>
                        })}
                    </div>
                </section>

                {/* Discounts & Events */}
                <section className="flex gap-2 flex-col p-2">
                    <h1 className=" font-bold">Discounts & Events</h1>

                    <div className="flex gap-4 px-3 pt-3 pb-11 bg-[rgb(26,44,62)] overflow-x-scroll">
                        {Array.from({length: 3}).map((_, index) => {
                            return <div key={index} className="border relative flex flex-col justify-end h-75 w-60 shrink-0">
                                <div className="border absolute -top-2 left-0 p-1 font-semibold text-xs bg-gradient-to-r from-[rgb(97,14,93)] to-[rgb(183,37,90)]">MIDWEEK DEAL</div>
                                <div className="border bg-blue-400 h-64"></div>
                                <div className="flex justify-end">
                                    <div className="flex justify-center items-center px-1 h-9 font-semibold text-sm bg-[rgb(161,205,68)] text-black">Up to -80%</div>
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
                            <div className="flex justify-center items-center px-2 py-1 font-medium text-sm bg-[rgb(26,159,255)] rounded-md">NEW</div>
                            <p className="font-semibold">Your Personal Calendar</p>
                        </div>

                        <p className="text-xs">A personalized-for-you list of new and upcoming games</p>
                    </div>

                    <div className="flex gap-1.5 pb-4 overflow-x-scroll">
                        {Array.from({length:8}).map((_, index) => {
                            return <div key={index} className="flex gap-2 flex-col pt-1 px-1.5 pb-3 h-auto w-28 bg-gradient-to-b from-[rgb(30,81,131)] to-[rgb(25,42,63)] shrink-0">
                                <div className="flex gap-2 justify-center items-center text-xs">
                                    <p>MON</p>
                                    <p className="font-semibold">7/25</p>
                                </div>

                                <div className="flex flex-col gap-3">
                                    {Array.from({length: 2}).map((_, index) => {
                                        return <div key={index} className="h-26 bg-gray-300"></div>
                                    })}
                                </div>
                            </div>
                        })}
                    </div>

                    <div className="flex justify-end">
                        <button className="px-4.5 py-1 w-fit text-xs font-semibold bg-[rgb(204,204,204)] text-black rounded-sm">Explore your full Personal Calendar</button>
                    </div>
                </section>



            </div>
        </>
    );
};

export default Home;