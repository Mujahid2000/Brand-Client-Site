import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
    return (
        <div>
            <div className="border max-w-7xl mx-auto mb-10 py-10 px-4">
            <Carousel>
                <div>
                    <img className='w-full h-46' src="https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg" />
                    <p className="legend">Car 1</p>
                </div>
                <div>
                    <img className='w-full h-46' src="https://t4.ftcdn.net/jpg/01/46/89/33/360_F_146893339_W7gl4KxGZkDlaac8f64FpFLRSeyWmzt9.jpg" />
                    <p className="legend">Car 2</p>
                </div>
                <div>
                    <img className='w-full h-46' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQSZ3BB_XHAPatpUsM6Yg6YuXQnVuItSmTBXHTONMv&s" />
                    <p className="legend">Car 3</p>
                </div>
            </Carousel>

            </div>

        </div>
    );
};

export default Slider;