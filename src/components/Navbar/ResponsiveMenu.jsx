/* eslint-disable react/prop-types */
import { FaUserCircle } from "react-icons/fa";


const ResponsiveMenu = ({ showMenu }) => {
    return (
        <>
            <div className={`fixed top-0 z-50 ${showMenu ? "left-0" : "-left-[100%]"} h-screen w-[75%] bg-purple-100/80 dark:bg-slate-950/80 dark:text-white z-50 transition-all duration-500 pt-24 pb-6 px-8 flex flex-col justify-between md:hidden`}>
                {/* Navbar Section */}
                <div>
                    {/* User Section */}
                    <div className="flex items-center justify-start gap-3">
                        <FaUserCircle size={50} />
                        <div>
                            <h2 className="text-xl font-semibold">Shuvankor Hazra</h2>
                            <h2 className="text-sm text-slate-500">+88-01741-836653</h2>
                        </div>
                    </div>
                    {/* Menu Section */}
                    <nav className="mt-12">
                        <ul className="space-y-6 text-lg font-semibold">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Service</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/* Navbar footer Section */}
                <div>
                    <p>@2024 All Rights Reserved</p>
                </div>
            </div >
        </>
    );
}

export default ResponsiveMenu;
