import React from 'react';
import { CardGroup } from 'react-bootstrap';
import SingleCard from '../SingleCard/SingleCard';

const CardsGroup = ({ users }) => {

    return (
        <div>
            <CardGroup>
                {
                    users.map(user => <SingleCard
                        key={user.id}
                        user={user}
                    ></SingleCard>)
                }
            </CardGroup>
        </div >
    );
};

export default CardsGroup;