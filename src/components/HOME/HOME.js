import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div>
                <div>
                    <h3>It could be your best product</h3>
                    <h3 className='tagline'>With good value for money</h3>
                    <p>choose it & save money.</p>
                    <button className='live-demo'>Live Demo</button>
                </div>
                <div>
                    <img src="" alt="" />
                </div>
            </div>

            <div>
                <h2>Customer Reviews</h2>
                <button className='review-details'>See All Reviews</button>
            </div>
        </div>
    );
};

export default Home;