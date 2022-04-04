import React from 'react';
import useData from '../../hooks/useData';
import CardsGroup from '../CardsGroup/CardsGroup';
import './Home.css';
import Bike from '../../images/bike.jpg';
import { useNavigate } from 'react-router';

const Home = () => {
    const [users] = useData();

    let navigate = useNavigate();
    function handleReviewButton() {
        navigate('/reviews')
    }

    return (
        <div>
            <div className='product-section'>
                <div>
                    <h3>It could be your best product</h3>
                    <h3 className='tagline'>With good value for money</h3>
                    <p>choose it and save money.</p>
                    <button className='live-demo'>Live Demo</button>
                </div>
                <div>
                    <img src={Bike} alt="" />
                </div>
            </div>

            <div className='customer-review-section'>
                <h2>Customer Reviews</h2>
                <h3>Reviewers: {users.length}</h3>
                <CardsGroup
                    users={users}
                ></CardsGroup>
                <button className='review-details-btn' onClick={handleReviewButton}>See All Reviews</button>
            </div>
        </div>
    );
};

export default Home;