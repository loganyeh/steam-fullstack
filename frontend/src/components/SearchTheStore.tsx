

type SearchTheStoreProps = {
    className?: string,
};

function SearchTheStore({ className }: SearchTheStoreProps ){

    return(
        <>
            <div className={`border ${className} flex w-full max-w-75`}>
                <input type="text" placeholder="Search the store" className="px-2 py-1.5 w-full italic text-sm" />
                
                <div className="flex justify-center items-center p-1.5 bg-blue-400">
                    <i className='bx bx-search text-xl text-white' ></i>
                </div>
            </div>
        </>
    );
};

export default SearchTheStore;