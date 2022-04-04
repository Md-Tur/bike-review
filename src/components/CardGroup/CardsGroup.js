import React from 'react';
import { CardGroup } from 'react-bootstrap';
import useData from '../../hooks/useData';
import SingleCard from '../SingleCard/SingleCard';

const CardsGroup = () => {
    const [users] = useData();

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
        </div>
    );
};

export default CardsGroup;