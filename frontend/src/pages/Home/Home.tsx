

function Home(){

    return(
        <>
            {/* <div className="pt-16 h-900"> */}
            <div className="pt-16 h-900 bg-[rgb(15,25,36)] text-white">
                {/* Search Bar */}
                <section className="fixed top-0 left-0 flex gap-5 justify-between items-center px-2 py-3.5 w-full bg-[rgb(23,26,33)]">
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
                <section className="flex justify-between px-3 py-2 bg-gray-500 text-white">
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

                <section className="flex gap-2 flex-col p-2">
                    <h1 className=" font-bold">Featured & Recommended</h1>

                    <div className="flex gap-4 overflow-x-scroll">

                        {Array.from({length: 2}).map((_, index) => {
                            return <div key={index} className="border h-72 w-80 shrink-0">
                                <div className="border h-48">

                                </div>

                                <div className="border h-24">

                                </div>
                            </div>
                        })}


                    </div>
                </section>
                



            </div>
        </>
    );
};

export default Home;