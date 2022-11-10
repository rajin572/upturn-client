import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hook/useTitle';
import ServiceCard from '../../Shared/ServiceCard/ServiceCard';
import './Services.css'

const Services = () => {
    useTitle('services')
    const data = useLoaderData()
    console.log(data);
    return (
        <div className='serviceSection'>
            <h1 className='text-center'>Services</h1>
            <h4 className='text-center'>All The Services are Here</h4>
            <div className='serviceCard'>
            {
                data.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
            }
            </div>
        </div>
    );
};

export default Services;