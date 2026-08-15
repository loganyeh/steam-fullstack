
type GrayButtonProps = {
    text: string,
};

function GrayButton({ text }: GrayButtonProps ){

    return(
        <>
            <div className="flex justify-end">
                <button className="px-4.5 py-1 font-semibold text-xs bg-gray-300 rounded-sm">{text || "See more"}</button>
            </div>
        </>
    );
};

export default GrayButton;
