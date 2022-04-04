import React from 'react';
import useData from '../../hooks/useData';
import './Home.css';

const Home = () => {
    const [user] = useData();

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
                <h3>Reviewer: {user.length}</h3>
                <button className='review-details-btn'>See All Reviews</button>
            </div>
        </div>
    );
};

export default Home;