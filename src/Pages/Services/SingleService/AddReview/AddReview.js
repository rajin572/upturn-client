import React, { useContext } from 'react';
import { AuthContext } from '../../../../context/AuthProvider';
import './AddReview.css'

const AddReview = ({data}) => {
    const {user} = useContext(AuthContext)
    const { _id, title, price, img } = data;

    const handlePlaceReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const review = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            customerImage: user.photoURL,
            email,
            phone,
            message,
            img
        }
        console.log(review);


        // }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    alert('Order placed successfully')
                    form.reset();
                    
                }
            })
            .catch(er => console.error(er));


    }
    return (
        <div className='addReview'>
            <form onSubmit={handlePlaceReview}>
                <div className='reviewInput'>
                    <div>
                        <label className='d-block' htmlFor="first">First Name</label>
                        <input id='first' name="firstName" type="text" placeholder="First Name"/>
                    </div>
                    <div>
                        <label className='d-block' htmlFor="last">Last Name</label>
                        <input id='last' name="lastName" type="text" placeholder="Last Name" />
                    </div>
                    <div>
                        <label className='d-block' htmlFor="phone">Your Phone</label>
                        <input id='phone' name="phone" type="text" placeholder="Your Phone" required />
                    </div>
                    <div>
                        <label className='d-block' htmlFor="email">Your email</label>
                        <input id='email' name="email" type="text" placeholder="Your email" defaultValue={user?.email} readOnly />
                    </div>
                </div>
                <textarea name="message" className="textarea" placeholder="Your Message" required></textarea>

                <div>
                    {
                    user?.uid ? 
                    <input className='submitBtn' type="submit" value="Place Your Order" />
                    :
                    <>
                        <p>Please Login first</p>
                    </>
                    }
                </div>
            </form>
        </div>
    );
};

export default AddReview;