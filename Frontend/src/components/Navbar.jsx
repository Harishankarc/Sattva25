import { useState } from "react";
import { Link } from 'react-router-dom'
export default function Navbar() {
    const [open, isOpen] = useState(false)
    return (
        <nav>
            <label>
                <div
                    className="w-20 h-20 cursor-pointer flex flex-col items-center justify-center z-50"
                >
                    <input className="hidden peer" type="checkbox" onClick={() => isOpen(!open)} />
                    <div
                        className="w-[50%] h-[5px] bg-white rounded-sm transition-all duration-300 origin-left translate-y-[1rem] peer-checked:rotate-[-45deg]"
                    ></div>
                    <div
                        className="w-[50%] h-[5px] bg-white rounded-md transition-all duration-300 origin-center peer-checked:hidden"
                    ></div>
                    <div
                        className="w-[50%] h-[5px] bg-white rounded-md transition-all duration-300 origin-left -translate-y-[1rem] peer-checked:rotate-[45deg]"
                    ></div>
                </div>
                {open ? <>
                    <div className={`absolute top-0 h-screen w-screen bg-black  opacity-65 openingDiv z-50`}>
                        <div className="text-white text-7xl flex flex-col items-center justify-center h-screen">
                            <ul className="flex flex-col gap-8 z-50">
                                <li className="cursor-pointer">
                                    <a to="#">Events</a>
                                </li>
                                <li className="cursor-pointer">
                                    <a to="#">Schedule</a>
                                </li>
                                <li className="cursor-pointer">
                                    <a to="#">Arts</a>
                                </li>
                                <li className="cursor-pointer">
                                    <a to="#">Sports</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </> :
                    <div className={`absolute top-0 h-screen w-screen bg-black  opacity-65 closingDiv`}>
                        <div className="text-white text-7xl flex-col items-center justify-center h-screen hidden">
                            <ul className="flex flex-col gap-8 ">
                                <li className="cursor-pointer">
                                    <a to="#">Events</a>
                                </li>
                                <li className="cursor-pointer">
                                    <a to="#">Schedule</a>
                                </li>
                                <li className="cursor-pointer">
                                    <a to="#">Arts</a>
                                </li>   
                                <li className="cursor-pointer">
                                    <a to="#">Sports</a>
                                </li>
                            </ul>
                        </div>
                    </div>}
            </label>


        </nav>
    );
}