import React from 'react';
import BrandCard from './BrandCard';

const Card = ({brandCars}) => {
    console.log(brandCars);

    return (
        <div className='grid dark:bg-gray-900 grid-cols-1 lg:grid-cols-3 mt-10 gap-6'>
            {
                brandCars?.map(card => <BrandCard cards={card} key={card.id}></BrandCard>)
            }
        </div>
    );
};

export default Card;