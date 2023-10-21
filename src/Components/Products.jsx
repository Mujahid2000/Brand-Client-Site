import { Rating } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Slider from "./Slider";

const Products = () => {
    const [data, setData] = useState([]);
    const { brand } = useParams();

    useEffect(() => {
        const apiUrl = `http://localhost:5050/carmodel?brand=${brand}`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                console.error('Fetch error:', error);
            });
    }, [brand]);

    return (
        <div>
            
            <div>
                {/* slider line */}
                <div className="border max-w-7xl mx-auto mb-10">
            <div id="controls-carousel" className="relative w-full" data-carousel="static">
    {/* Carousel wrapper */}
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {/* Item 1 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-1.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        {/* Item 2 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
            <img src="/docs/images/carousel/carousel-2.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        {/* Item 3 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-3.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        {/* Item 4 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-4.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        {/* Item 5 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-5.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
    </div>
    {/* Slider controls */}
    <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>

        </div>
            </div>
        <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {data
            .filter((item) => item.brand === brand) // Filter data by brand
            .map((item) => (
            <div key={item.id} className="max-w-sm rounded overflow-hidden shadow-lg">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                <div className="px-6 py-4">
                    <h2 className="font-bold text-xl text-gray-800 mb-2">{item.brand}</h2>
                    <p className="text-gray-600 text-base mb-2">{item.name}</p>
                    <p className="text-gray-600 text-base mb-2">{item.type}</p>
                    <div className="flex justify-between">
                    <p className="text-blue-500 text-xl">Price: {item.price}</p>
                   
                    <p>
                    <Rating>
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star filled={true} />
                    <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                        {item.rating} out of 5
                    </p>
                    </Rating>
                    </p>
                    </div>
                    <div className="flex gap-4">
                    <Link to={`/update/${item._id}`}>
                    <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 py-2 px-4 rounded-full shadow-md transition-transform transform hover:scale-105">
                    Update
                    </button>
                    </Link>
                    <Link to={`/detail/${item._id}`}>
                    <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white hover:from-blue-600 hover:to-green-600 py-2 px-4 rounded-full shadow-md transition-transform transform hover:scale-105">
                        Details
                    </button>
                    </Link>
                    </div>
                </div>
            </div>
        ))}
            </div>
        </div>
        <div>
            {

            }
        </div>
        </div>
    );
};

export default Products;
