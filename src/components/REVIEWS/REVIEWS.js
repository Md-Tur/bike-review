import React from 'react';
import { CardGroup } from 'react-bootstrap';
import useData from '../../hooks/useData';
import SingleCard from '../SingleCard/SingleCard';
import './Reviews.css';

const REVIEWS = () => {
    const [users] = useData();

    return (
        <div>
            <h1>Reviews: {users.length}</h1>
            <CardGroup className='review-all'>
                {
                    users.map(user => <SingleCard
                        key={user.id}
                        user={user}
                    ></SingleCard>)
                }
            </CardGroup>
        </div>
    );
};

export default REVIEWS;