
type SendAGiftCardProps = {
    className?: string,
};

function SendAGiftCard({ className }: SendAGiftCardProps ){

    return(
        <>
            <section className="flex justify-end md:w-full">
                <div className={`relative flex justify-center md:justify-end py-2 md:pr-2 w-full bg-blue-400 rounded`}>
                    <p className="font-semibold md:text-sm text-white">Send a Gift Card</p>
                    <img src="https://cdn.akamai.steamstatic.com/store/home/gc_fan.webp" alt="" className="absolute left-0 top-1/2 -translate-y-1/2 h-[115%]" />
                </div>
            </section>
        </>
    );
};

export default SendAGiftCard;