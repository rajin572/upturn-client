import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../../Shared/ServiceCard/ServiceCard';
import './LimitedService.css'

const LimitedService = () => {
    const [services, setService] = useState([])

    useEffect(() =>{
        fetch('http://localhost:5000/limitServices')
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
        <div className='limitedService'>
            <h1 className='text-center'>Services</h1>
            <h4 className='text-center'>Those Service I provide</h4>
            <div className='limitedCard'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <div className='text-center'>
                <Link className='btn btn-primary d-inline-block' to='/services'>See All</Link>
            </div>
            
        </div>
    );
};

export default LimitedService;