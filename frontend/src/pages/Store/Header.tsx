import SearchTheStore from "../../components/SearchTheStore";

function Header(){

    return(
        <>
            <header className="border fixed z-10 flex justify-between items-center px-2 py-2.5 w-full bg-gray-200">
                {/* menu */}
                <div className="flex justify-center items-center">
                    <i className='bx bx-menu text-4xl'></i>
                </div>

                {/* Steam Logo */}
                <div className="hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:flex items-center gap-2">
                    <i className='bx bxl-steam text-5xl'></i>
                    <h1 className="font-semibold text-xl tracking-wider">STEAM</h1>
                </div>

                <SearchTheStore className="md:hidden" />
            </header>
        </>
    );
};

export default Header;