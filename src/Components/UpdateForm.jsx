import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthProvider/AuthProvider';


const AddProductPage = () => {


    const { id } = useParams();
    const [data, setData] = useState({});
    const { user } = useContext(AuthContext);
    const [reFetch, setReFetch] = useState(false);
    useEffect(() => {
        async function fetchData() {
            fetch(`http://localhost:5050/product/get/${id}`)
                .then(async res => await res.json())
                .then(data => {
                    setData(data)
                })
        }
        fetchData()
    }, [id, reFetch])

    const handleAddProduct = event => {
        event.preventDefault();


        const form = event.target;

        const image = form.image.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;

        const rating = form.rating.value;


        const brandData = {
            image, name, brand, type, price, rating
        }
        fetch('http://localhost:5050/update/' + data?._id, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(brandData)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.modifiedCount > 0) {

                    Swal.fire({
                        icon: 'success',
                        title: 'Done...',
                        text: 'Product Updated To Cart',
                    });
                    form.reset()
                    setReFetch(!reFetch)
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                    });
                }
            })


    }



    return (

        <div className="max-w-md mx-auto bg-white dark:bg-gray-900 p-6 rounded-md shadow-md bg-gradient-to-r from-green-400 to-blue-500">
            <h1 className="text-2xl font-bold text-center mb-4">Update Product</h1>
            <form onSubmit={handleAddProduct}>
                <div className="mb-4">
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                        Image
                    </label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200"
                        accept="image/*"
                        defaultValue={data?.image}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200"
                        defaultValue={data?.name}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
                        Brand Name
                    </label>
                    <input
                        type="text"
                        id="brand"
                        name="brand"
                        className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200"
                        defaultValue={data?.brand}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                        Category
                    </label>
                    <select
                        id="type"
                        name="type"
                        className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200"
                        defaultValue={data?.type}
                    >
                        <option value="select">Select</option>
                        <option value="Sedans">Sedans</option>
                        <option value="SUV (Sport Utility Vehicle)">SUV (Sport Utility Vehicle)</option>
                        <option value="Hatchback">Hatchback</option>
                        <option value="Sports Activity Vehicles (SAVs)">Sports Activity Vehicles (SAVs)</option>
                        <option value="Coupe">Coupe</option>
                        <option value="Electric Vehicles (EVs)">Electric Vehicles (EVs)</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                        Price
                    </label>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        defaultValue={data?.price}
                        className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200"
                    />
                </div>



                <div className="mb-4">
                    <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
                        Rating
                    </label>
                    <input
                        type="text"
                        id="rating"
                        name="rating"
                        defaultValue={data?.rating}
                        className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddProductPage;
