import React from 'react';
import { Card } from 'react-bootstrap';

const SingleCard = ({ user }) => {

    const { name, comment, rating } = user;
    return (
        <Card>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {comment}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Rating: {rating}</small>
            </Card.Footer>
        </Card>
    );
};

export default SingleCard;