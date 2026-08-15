import GrayButton from "../../components/GrayButton";

function Under10Games(){

    return(
        <>
            <section className="border flex gap-3 flex-col px-2">
                <p className="font-bold">Under $10</p>

                <div className="border flex gap-3.5 pb-3 overflow-x-auto">
                    {Array.from({length: 2}).map((_, index) => {
                        return <div key={index} className="w-62 md:w-50 shrink-0">
                            <div className="aspect-16/9 bg-gray-300"></div>

                            <div className="flex justify-end font-bold text-xs">
                                <div className="border px-1.5 py-1.5">-75%</div>
                                <div className="border px-0.5 py-1.5 line-through">$29.99</div>
                                <div className="border px-0.5 py-1.5">$7.49</div>
                            </div>
                        </div>
                    })}
                </div>

                <div className="border flex flex-col items-end">
                    <p className="font-semibold text-xs">See more:</p>

                    <div className="flex gap-1.5">
                        <GrayButton text="Under $10" />
                        <GrayButton text="Under $5" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Under10Games;