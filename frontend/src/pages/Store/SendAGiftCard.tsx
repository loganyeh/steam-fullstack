

function SendAGiftCard(){

    return(
        <>
            <section className="relative flex justify-end mx-2">
                <div className="pl-14 py-2 max-w-xs w-full font-semibold bg-blue-400 rounded">
                    Send a Gift Card
                </div>

                <img src="https://cdn.akamai.steamstatic.com/store/home/gc_fan.webp" alt="" className="absolute left-0 top-1/2 -translate-y-1/2 h-[115%]" />
            </section>
        </>
    );
};

export default SendAGiftCard;