import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import type { IReview } from '../store';
type ReviewCardProps = {
    review: IReview;
};

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title>{review.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    Review of {review.location.name} by {review.author.username} on {review.date}
                </Card.Subtitle>
                <Card.Text>
                    {review.preview}...
                    <Link to={`reviews/${review.id}`}>Read more</Link>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ReviewCard;