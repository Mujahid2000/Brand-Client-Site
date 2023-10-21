import React from 'react';

const Slider = () => {
    return (
        <div>
            <div className="border max-w-7xl mx-auto mb-10 py-10 px-4">
                <div id="controls-carousel" className="relative w-full" data-carousel="static">
                    {/* Carousel wrapper */}
                    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                        {/* Item 1 */}
                        <div className=" duration-700 ease-in-out" data-carousel-item>
                            <img src="https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg" alt="..." />
                        </div>
                        {/* Item 2 */}
                        <div className=" duration-700 ease-in-out" data-carousel-item="active">
                            <img src="https://t4.ftcdn.net/jpg/01/46/89/33/360_F_146893339_W7gl4KxGZkDlaac8f64FpFLRSeyWmzt9.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>
                        {/* Item 3 */}
                        <div className=" duration-700 ease-in-out" data-carousel-item>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQSZ3BB_XHAPatpUsM6Yg6YuXQnVuItSmTBXHTONMv&s" alt="..." />
                        </div>
                        {/* Item 4 */}
                        <div className=" duration-700 ease-in-out" data-carousel-item>
                            <img src="https://cdn.motor1.com/images/mgl/ZnmO23/414:0:2878:2160/future-cars-2023-2026.webp" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>
                        {/* Item 5 */}
                        <div className=" duration-700 ease-in-out" data-carousel-item>
                            <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
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
    );
};

export default Slider;