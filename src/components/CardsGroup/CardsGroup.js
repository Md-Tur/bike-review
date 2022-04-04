import React from 'react';
import { CardGroup } from 'react-bootstrap';
import SingleCard from '../SingleCard/SingleCard';
import './CardsGroup.css';

const CardsGroup = ({ users }) => {

    return (
        <div>
            <CardGroup className='review-card'>
                {
                    users.slice(0, 3).map(user => <SingleCard
                        key={user.id}
                        user={user}
                    ></SingleCard>)
                }
            </CardGroup>
        </div >
    );
};

export default CardsGroup;