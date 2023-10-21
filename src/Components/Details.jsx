import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Details = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
    const { user } = useContext(AuthContext);
    useEffect(() => {
        async function fetchData() {
            fetch(`http://localhost:5050/product/get/${id}`)
                .then(async res => await res.json())
                .then(data => {
                    setData(data)
                })
        }
        fetchData()
    }, [id])
    async function handleAddToCart() {
        const data = {
            userId: user?.uid,
            productId: id
        }
        //    fech post data
        fetch('http://localhost:5050/add-to-cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {    
                    Swal.fire({
                        icon: 'success',
                        title: 'Done...',
                        text: 'Product Added To Cart',
                    });
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
        <div className='border to-black min-h-screen'>
            <div className="max-w-4xl mx-auto mt-8 p-4">
                <div className="md:flex md:space-x-4">
                    <div className="md:w-1/2">
                        <img src={data?.image} alt={data?.name} className="w-full h-auto" />
                    </div>
                    <div className=" md:w-1/2">
                        <h2 className="text-3xl font-semibold">{data?.name}</h2>
                        <p className="text-xl mt-2 text-gray-600">{data?.brand}</p>
                        <p className="text-xl mt-2 text-gray-600">{data?.type}</p>
                        <p className="text-2xl mt-4 text-red-700">${data?.price}</p>
                        <p className="text-2xl mt-2">{data?.rating} stars</p>
                        <p className="text-xl mt-2">{data?.description}</p>
                        <button onClick={handleAddToCart} className='btn btn-primary bg-blue-800 py-2 px-8 text-white mt-8'>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;