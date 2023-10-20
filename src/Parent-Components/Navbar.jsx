import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { DarkThemeToggle, Flowbite } from "flowbite-react";




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
        
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
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
                                <button onClick={handleLogOut} className="btn btn-info text-gray-900">LogOut</button>
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