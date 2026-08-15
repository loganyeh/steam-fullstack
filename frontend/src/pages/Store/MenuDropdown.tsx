

function MenuDropdown(){
    
    return(
        <>
            <section className="border border-red-600 fixed z-10 flex justify-between px-2 py-3 w-full bg-gray-200">
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
        </>
    );
};

export default MenuDropdown;