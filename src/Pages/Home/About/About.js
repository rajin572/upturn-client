import React from 'react';
import img1 from '../../../images/aboutIcon1.png'
import img2 from '../../../images/aboutIcon2.png'
import img3 from '../../../images/aboutIcon3.webp'
import './About.css'

const About = () => {
    return (
        <div className='aboutSection'>
            <h2><span className='text'>Three Reasons</span> to Work With Me</h2>
            <div className='aboutGrid'>
                <div className='aboutCard'>
                    <img src={img1} alt="" />
                    <div className='aboutCardText'>
                        <h3>A Focus on Owner-Managers</h3>
                        <p>My practice is organized to serve private companies and their Owners. I offer exceptional service that is focused on increasing profitability, preserving wealth from tax and increasing your net worth.</p>
                    </div>
                </div>
                <div className='aboutCard'>
                    <img src={img2} alt="" />
                    <div className='aboutCardText'>
                        <h3>Proven Track Record</h3>
                        <p>I’ve been consulting Business Owners for over 5 years. Small Business Accountant is dedicated to your success and treats your business as if it were our own.</p>
                    </div>
                </div>
                <div className='aboutCard'>
                    <img src={img3} alt="" />
                    <div className='aboutCardText'>
                        <h3>Expert Solutions to Your Problems</h3>
                        <p>New problems arise every day for Business Owners. I offer Partner-level attention and implement tailored solutions to your tax, accounting, and other business problems.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;