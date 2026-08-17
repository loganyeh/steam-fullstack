
type GrayButtonProps = {
    className?: string,
    text: string,
};

function GrayButton({ className, text }: GrayButtonProps ){

    return(
        <>
            <div className={`flex justify-end ${className}`}>
                <button className="px-4.5 py-1 font-semibold text-xs bg-gray-300 rounded-sm">{text || "See more"}</button>
            </div>
        </>
    );
};

export default GrayButton;
