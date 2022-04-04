import React from 'react';
import useData from '../../hooks/useData';

const REVIEWS = () => {
    const [user] = useData();

    return (
        <div>
            <h1>Reviews: {user.length}</h1>
        </div>
    );
};

export default REVIEWS;