import { browseByCategoryData } from "../../data/gamesData";

function BrowseByCategory(){

    return(
        <>
            <section className="border flex gap-4 flex-col px-2">
                <p className="font-bold">Browse by Category</p>

                <div className="flex gap-3.5 pb-4 overflow-x-auto">
                    {browseByCategoryData.map((cat, index) => {
                        return <div key={index} className={`flex justify-center items-center px-4 min-w-47 max-w-52 aspect-8/7 ${cat.img} shrink-0 rounded-xl`}>
                            <p className="px-3.5 py-1 font-semibold tracking-wide bg-gray-300 rounded">{cat.category}</p>
                        </div>
                    })}
                </div>
            </section>
        </>
    );
};

export default BrowseByCategory;