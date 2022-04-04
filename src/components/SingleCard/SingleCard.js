import React from 'react';
import { Card } from 'react-bootstrap';
import './SingleCard.css';

const SingleCard = ({ user }) => {

    const { name, comment, rating } = user;
    return (
        <Card className='single-card'>
            <Card.Body>
                <Card.Title style={{ fontWeight: 'bold' }}>Name: {name}</Card.Title>
                <Card.Text>
                    Comment: {comment}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Rating: {rating}</small>
            </Card.Footer>
        </Card>
    );
};

export default SingleCard;