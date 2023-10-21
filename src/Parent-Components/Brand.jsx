
import React, { useEffect, useState } from 'react';
import IdCards from '../Components/IdCards';

const Brand = () => {
    const [carData, setCarData] = useState([]);
    
    
    useEffect(() => {
        // Fetch data when the component mounts
        fetch('http://localhost:5050/carmodel')
            .then(response => response.json())
            .then(data => setCarData(data))
            .catch(error =>{});
    }, []); 

    return (
        <div>
            {carData.map(car => (
                <div key={car._id}>
                    <IdCards car={car}></IdCards>
                </div>
            ))}
        </div>
    );
};

export default Brand;
