import React from 'react';
import img from '../../../images/Guarantee.webp'
import './Guarantee.css'

const Guarantee = () => {
    return (
        <div className='GuaranteeSection'>
            <img src={img} alt="" />
            <div>
                <h2>The Only CPA Firm with a <span> Pricing Guarantee</span></h2>
                <p>My pricing guarantee is simple: If I don’t quote you upfront for the work, I don’t expect you to pay. Whether that’s in my first engagement with you, or it’s in 20 years from now.
You’ll never receive an unpleasant surprise in my invoicing.</p>
            </div>
        </div>
    );
};

export default Guarantee;