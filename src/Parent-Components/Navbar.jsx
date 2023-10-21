import { DarkThemeToggle, Flowbite } from "flowbite-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";




const Navbar = () => {

    const { user, logout } = useContext(AuthContext);
    const handleLogOut = () => {
        logout()
            .then()
            .catch()
    }

    return (
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="" className="flex items-center">
                        <img src="https://i.ibb.co/Lvdjqm4/car-logo.png" className="h-8 rounded-lg mr-3" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-blue-500">Card Deals</span>
                    </a>
                    <button onClick={() => {
                        document.getElementById("navbar-default").classList.toggle("hidden");
                    }} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">

                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row items-center md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Flowbite>
                                    ...
                                    <DarkThemeToggle />
                                    ...
                                </Flowbite>
                            </li>
                            <Link to='/' className="visited:to-blue-600">
                                <li >
                                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Home</a>
                                </li>
                            </Link>
                            <Link to='/products' className="visited:to-blue-600">
                                <li >
                                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Add Product</a>
                                </li>
                            </Link>

                            <Link to='/cart' className="visited:to-blue-600">
                                <li >
                                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">My Cart</a>
                                </li>
                            </Link>

                            <Link to='/contact' className="visited:to-blue-600">
                                <li >
                                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact Us</a>
                                </li>
                            </Link>

                            {
                                user ?
                                    <div className="flex gap-3">
                                        <div className="relative">
                                            <img src={user?.photoURL} className="rounded-full w-12" alt="" onClick={(e) => {
                                                e.stopPropagation();
                                                e.preventDefault();
                                                e.target.nextSibling.classList.toggle("hidden")
                                            }} />
                                            <p className="absolute hidden top-12 left:[0%] lg:right-[60px] w-[150px] lg:w-[220px] bg-blue-500 px-2 py-1 rounded text-center">{user?.displayName}</p>
                                        </div>
                                        <button onClick={handleLogOut} className="text-red-800">LogOut</button>
                                    </div>
                                    :

                                    <div>
                                        <li>
                                            <Link
                                                to="/login"
                                                className={({ isActive, isPending }) =>
                                                    isPending ? "pending" : isActive ? "text-[#333333] underline font-medium text-lg" : ""
                                                }
                                            >
                                                <button className="btn btn-info text-gray-900">Login</button>

                                            </Link>

                                        </li>
                                    </div>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;