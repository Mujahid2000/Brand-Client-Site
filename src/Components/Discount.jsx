import React from 'react';

const Discount = () => {
    return (
        <div className='p-4'>
             <div className=' lg:flex dark:bg-gray-900 bg-sky-500 mt-10 items-center justify-center lg:max-w-7xl p-4 mx-auto rounded-xl'>
            <div className=''>
                <h2 className='font-semibold mt-2 text-lg text-white'>Sell your car for what it's really worth</h2>
                <p className='font-semibold mt-2 text-lg text-white'>The free and easy way to get 3000+ dealers all over the UK bidding on your car</p>
                <p className='font-semibold mt-2 text-lg text-white'>Your vehicle registration</p>
                <div className='lg:flex lg:gap-6  '>
                <input
                    type="text"
                    className=" p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter text here"
                    />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold ml-3 py-2 px-4 rounded animate-bounce">
                    Primary
                    </button>

                </div>
            </div>
            <div>
                <img className='' src="https://i.ibb.co/mGWHhnf/mansuprize-prev-ui.png" alt="" />
            </div>
        </div>
       </div>
    );
};

export default Discount;
