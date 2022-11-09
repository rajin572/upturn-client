import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Guarantee from './Guarantee/Guarantee';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Guarantee></Guarantee>
        </div>
    );
};

export default Home;