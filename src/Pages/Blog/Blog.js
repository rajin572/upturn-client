import React from 'react';
import useTitle from '../../hook/useTitle';

const Blog = () => {
    useTitle('blog')
    return (
        <div>
            <h2>This is Blog</h2>
        </div>
    );
};

export default Blog;