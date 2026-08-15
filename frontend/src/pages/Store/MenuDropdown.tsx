import SearchTheStore from "../../components/SearchTheStore";

function MenuDropdown(){
    
    return(
        <>
            <section className="border border-red-600 fixed z-10 flex justify-between px-2 py-3 w-full bg-gray-200">
                {/* menu dropdown */}
                <div className="flex items-center">
                    <p className="font-bold text-sm">Menu</p>
                    <i className='bx bx-chevron-down text-lg'></i>
                </div>

                <SearchTheStore className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:max-w-lg" />

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