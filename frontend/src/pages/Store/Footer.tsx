import { footerData } from "../../data/gamesData";
import { socialMediaIcons } from "../../data/gamesData";

function Footer(){

    return(
        <>
            <footer className="border flex gap-6 flex-col py-10 px-8">
                {/* links */}
                <div className="border grid gap-10 grid-cols-2">
                    {footerData.map((footer, index) => {
                        return <div key={index} className="flex gap-3 flex-col">
                            <p className="font-bold text-sm">{footer.title}</p>

                            {footer.links.map((link, index) => {
                                return <div key={index} className="font-medium text-sm">
                                    {link}
                                </div>
                            })}
                        </div>
                    })}
                </div>

                {/* STEAM LOGO */}
                <div className="border flex gap-8 items-center">
                    <div className="flex gap-2.5 items-center">
                        <i className='bx bxl-steam text-4xl'></i>
                        <p className="font-bold text-2xl">STEAM</p>
                    </div>

                    <div className="flex justify-center items-center bg-gray-300">
                        <p className="px-2 font-medium text-xl tracking-widest">VALVE</p>
                    </div>
                </div>

                {/* Copyright */}
                <p className="text-xs">
                    © 2026 Valve Corporation. All rights reserved. 
                    All trademarks are property of their respective 
                    owners in the US and other countries.
                    VAT included in all prices where applicable.
                </p>

                {/* Social Media */}
                <div className="border flex gap-5">
                    {socialMediaIcons.map((icon, index) => {
                        return <div key={index} className="flex justify-center items-center">
                            <i className={`${icon} text-4xl`} ></i>
                        </div>
                    })}
                </div> 

                {/* Button */}
                <button className="border px-4 py-2 w-fit font-medium text-sm bg-blue-400 text-white rounded-sm">Get Mobile Apps</button>
            </footer>
        </>
    );
};

export default Footer;