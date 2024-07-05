import React, {useEffect} from 'react';
import ReviewCard from './ReviewCard'
import { useStore } from '../store';

function LatestReviews() {
    const fetchLatestReviews = useStore(state => state.fetchLatestReviews);
    useEffect(() => {
        fetchLatestReviews();
    }, [fetchLatestReviews]);
    const latestReviews = useStore(state => state.latestReviews);

    return (
        <div className="latest-reviews">
                {latestReviews.map(review => (
                    <ReviewCard key={review.id} review={review} />
                ))}
        </div>
    );
}

export default LatestReviews;