import React from 'react';
import useTitle from '../../hook/useTitle';
import './Blog.css'

const Blog = () => {
    useTitle('blog')
    return (
        <div>
        <div className='blogQuestion'>
            <h1>Question And Answer</h1>
            <section className="blogAnswerSection">
                <div className="card">
                    <h2>Question 1: Difference between SQL and NoSQL</h2>
                    <h3><span>Answer : </span>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</h3>
                    <p>
                    </p>
                </div>
                <div className="card">
                    <h2>Question 2: What is JWT, and how does it work??</h2>
                    <h3><span>Answer : </span>What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</h3>
                    <p></p>
                </div>
                <div className="card">
                    <h2>Question 3: What is the difference between javascript and NodeJS?</h2>
                    <h3><span>Answer : </span>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</h3>
                    <p></p>
                </div>
                <div className="card">
                    <h2>Question 4: How does NodeJS handle multiple requests at the same time?</h2>
                    <h3><span>Answer : </span>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</h3>
                    <p></p>
                </div>
            </section> 
        </div>
        </div>
    );
};

export default Blog;