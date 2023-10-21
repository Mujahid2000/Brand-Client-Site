import { Rating } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthProvider/AuthProvider';
const Mycarts = () => {
    const [data, setData] = useState([]);
    const { user } = useContext(AuthContext);
    const [reFetch, setReFetch] = useState(false);
    useEffect(() => {
        async function fetchData() {
            fetch(`https://brand-server-site.vercel.app/my-cart/` + user?.uid)
                .then(async res => await res.json())
                .then(data => {
                    setData(data)
                })
        }
        if (user?.uid) {
            fetchData()
        }
    }, [user, reFetch])

    async function deleteToCart(productId, userId) {
        const result = await fetch(`https://brand-server-site.vercel.app/my-cart/${productId}/${userId}`, {
            method: 'DELETE'
        })
        const data = await result.json()
        if (data?.deletedCount > 0) {
            setReFetch(!reFetch)

            Swal.fire({
                icon: 'success',
                title: 'Done...',
                text: 'Product Deleted To Cart',
            });
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        }

    }

    return (
        <div className='p-4 min-h-screen'>
            <h2 className='text-2xl font-bold text-center py-10'>Cart Data</h2>
            {
                data?.length === 0 ? <p className='text-center text-2xl font-bold'>No Data Found</p> : <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                    {
                        data.map((item) => (
                            <div key={item._id} className="max-w-sm rounded overflow-hidden shadow-lg">
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
                                        <button onClick={() => deleteToCart(item._id, user?.uid)} className="bg-gradient-to-r from-blue-500 to-green-500 text-white hover:from-blue-600 hover:to-green-600 py-2 px-4 rounded-full shadow-md transition-transform transform hover:scale-105">
                                            Remove to cart
                                        </button>

                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            }
        </div>
    );
};

export default Mycarts;