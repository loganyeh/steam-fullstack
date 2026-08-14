

function Header(){

    return(
        <>
            <header className="border fixed z-10 flex justify-between items-center px-2 py-2.5 w-full bg-gray-200">
                {/* menu */}
                <div className="flex justify-center items-center">
                    <i className='bx bx-menu text-4xl'></i>
                </div>

                {/* search */}
                <div className="border flex w-full max-w-75">
                    <input type="text" placeholder="Search the store" className="px-2 py-1.5 w-full italic text-sm" />
                    
                    <div className="flex justify-center items-center p-1.5 bg-blue-400">
                        <i className='bx bx-search text-xl text-white' ></i>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;