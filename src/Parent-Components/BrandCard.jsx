import { Link } from "react-router-dom";

const BrandCard = ({ cards, myCar }) => {
    const { brand, image } = cards;
    
    
    return (
        <div>
            <Link to={`/product/${brand}`}>
                <div className="w-96 dark:bg-[#334155] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img className="rounded-t-lg h-64 w-full" src={image} alt="" />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{brand}</h5>
                    </div>
                </div>
            </Link>

                
        </div>
    );
};

export default BrandCard;
