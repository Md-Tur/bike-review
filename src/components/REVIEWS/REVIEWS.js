import React from 'react';
import useData from '../../hooks/useData';

const REVIEWS = () => {
    const [users] = useData();

    return (
        <div>
            <h1>Reviews: {users.length}</h1>
        </div>
    );
};

export default REVIEWS;