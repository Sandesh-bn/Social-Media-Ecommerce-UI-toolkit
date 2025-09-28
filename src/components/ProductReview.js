/*
    image of product  all reviews
    over all rating
    average
    exellent

    write a review
*/

import { useEffect, useState } from "react";
import { defaultReviews } from '../assets/data/defaultReviews';
import { ReviewSummary } from "./ReviewSummary";
import { Reviews } from "./Reviews";
import './ProductReview.css';


export function ProductReview(props) {
    let { productImage, productTitle, reviews = defaultReviews } = props;
    const [productReviews, setProductReview] = useState(reviews);
    useEffect(() => {

    }, [reviews]);

    function addReview(review) {

    }


    return (
        <div className="product-review-container">
            <div className="product-review-summary-column">
                {/* <Product image={productImage} title={productTitle}/> */}
                <ReviewSummary productReviews={productReviews} />
            </div>

            {/* <ReviewCreator review={} rating={} user={}/> */}
            <div className="user-review-column">
                <Reviews productReviews={productReviews} />
            </div>
        </div>
    )
}