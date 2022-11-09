import React from 'react';
import useTitle from '../../hook/useTitle';
import About from './About/About';
import Banner from './Banner/Banner';
import Guarantee from './Guarantee/Guarantee';

const Home = () => {
    useTitle('home')
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Guarantee></Guarantee>
        </div>
    );
};

export default Home;