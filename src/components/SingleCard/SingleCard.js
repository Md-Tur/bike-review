import React from 'react';
import { Card } from 'react-bootstrap';

const SingleCard = (props) => {

    const { name, comment, rating } = props.user;
    return (
        // <Card>
        //     <Card.Body>
        //         <Card.Title>{name}</Card.Title>
        //         <Card.Text>
        //             {comment}
        //         </Card.Text>
        //     </Card.Body>
        //     <Card.Footer>
        //         <small className="text-muted">{rating}</small>
        //     </Card.Footer>
        // </Card>
        <p>{name}</p>
    );
};

export default SingleCard;