import SearchTheStore from "../../components/SearchTheStore";

function MenuDropdown(){
    const lgMenu = [
        "Browse", "Recommendations", "Categorites", "Hardware", "More"
    ];
    
    return(
        <>
            <section className="border border-red-600 fixed z-10 flex justify-between px-2 py-3 w-full bg-gray-200">
                {/* menu dropdown */}
                <div className="lg:hidden flex items-center">
                    <p className="font-bold text-sm">Menu</p>
                    <i className='bx bx-chevron-down text-lg'></i>
                </div>

                <div className="flex gap-4">
                    {lgMenu.map((tab, index) => {
                        return <div key={index} className="hidden lg:flex items-center">
                        <p className="font-bold text-sm lg:text-xs">{tab}</p>
                        <i className='bx bx-chevron-down text-lg'></i>
                    </div>
                    })}
                </div>

                <SearchTheStore className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 md:max-w-lg lg:max-w-sm" />

                {/* wishlist */}
                <div className="flex gap-1 items-center">
                    <i className='bx bxs-star' ></i>
                    <p className="font-semibold text-xs">Wishlist</p>
                </div>
            </section>
        </>
    );
};

export default MenuDropdown;