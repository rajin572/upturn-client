import React from 'react';
import useTitle from '../../hook/useTitle';
import Footer from '../Shared/Footer/Footer';
import About from './About/About';
import Banner from './Banner/Banner';
import Guarantee from './Guarantee/Guarantee';
import LimitedService from './LimitedService/LimitedService';

const Home = () => {
    useTitle('home')
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <LimitedService></LimitedService>
            <Guarantee></Guarantee>
        </div>
    );
};

export default Home;