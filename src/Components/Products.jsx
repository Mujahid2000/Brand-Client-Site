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
                <Slider></Slider>
            </div>
        <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 gap-3">
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
