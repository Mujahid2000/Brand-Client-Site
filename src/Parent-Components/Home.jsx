import { useLoaderData } from 'react-router-dom';
import Discount from '../Components/Discount';
import Policy from '../Components/Policy';
import Banner from './Banner';
import Card from './Card';

const Home = () => {
    const fakeData = useLoaderData([null]);
    

    return (
        <div>            
            <Banner></Banner>
            <div className='max-w-7xl mx-auto'>
            <Card brandCars={fakeData}></Card>
            </div>
            <Discount></Discount>
            <Policy></Policy>
        </div>
    );
};

export default Home;