import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <h2>Not Found 404</h2>
            <Link to='/'>Go To Our Home Page</Link>
        </div>
    );
};

export default Error;