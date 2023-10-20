import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";




const Products = () => {
    const [data, setData] = useState([]);
    const {brand} = useParams();
    console.log(brand);
    
    useEffect(() => {
        const apiUrl = 'http://localhost:5050/product/brand';
    
        fetch(apiUrl)
        .then(response => {response.json()})
        .then(data => {
            setData(data);
        })
        .catch(error => {
        console.error('Fetch error:', error);
        });
    }, []);
    
    
    return (
        <div>
            <h2>coffee:{data.length}</h2>           
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

        </div>
    );
};

export default Products;