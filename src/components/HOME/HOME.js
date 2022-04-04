import React from 'react';
import useData from '../../hooks/useData';
import SingleCard from '../SingleCard/SingleCard';
import './Home.css';

const Home = () => {
    const [users] = useData();

    return (
        <div>
            <div className='product-section'>
                <div>
                    <h3>It could be your best product</h3>
                    <h3 className='tagline'>With good value for money</h3>
                    <p>choose it & save money.</p>
                    <button className='live-demo'>Live Demo</button>
                </div>
                <div>
                    <h1>it's product image.</h1>
                    <img src="" alt="" />
                </div>
            </div>

            <div className='customer-review-section'>
                <h2>Customer Reviews</h2>
                <h3>Reviewers: {users.length}</h3>
                <SingleCard></SingleCard>
                <button className='review-details-btn'>See All Reviews</button>
            </div>
        </div>
    );
};

export default Home;