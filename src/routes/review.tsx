import React, { useEffect } from 'react';
import type { IReview } from '../store';
import { useParams } from "react-router-dom";
import { useStore } from '../store';
import ReviewCard from '../components/ReviewCard'

const Review: React.FC = () => {
    const { reviewId } = useParams<{ reviewId: string }>();
    const fetchReview = useStore(state => state.fetchReview);
    useEffect(() => {
        if (reviewId) {
            fetchReview(reviewId);
        }
    }, [fetchReview]);
    const review = useStore(state => state.review);
    if (review) {
        return (
            <ReviewCard review={review} />
        )

    } else {
        return (
            <div>
                No review here
            </div>
        );
    }
};

export default Review;