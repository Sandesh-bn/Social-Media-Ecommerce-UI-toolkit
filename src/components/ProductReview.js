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
import EditableContent from "./EditableContent";


export function ProductReview(props) {
    defaultReviews.sort((a, b) => b.date - a.date)
    let { productImage, productTitle, reviews = defaultReviews } = props;
    const [productReviews, setProductReview] = useState(reviews);
    let [newReview, setReview] = useState('')
    let sortByAttributes = [
            {label: 'Date (Latest first)', value: 'date'},
            {label: 'Rating (Highest first)', value: 'rating'},
            {label: 'Date (Earliest first)', value: 'date_asc'},
            {label: 'Rating (Lowest first)', value: 'rating_asc'}
            ];

        
    const [sortBy, setSortBy] = useState('date');

    useEffect(() => {
        
    }, [reviews]);

    function addReview(review) {

    }

    useEffect(() => {
        console.log(sortBy)
        let newData = [...productReviews];
        if (sortBy == 'date'){
            newData.sort((a, b) => b.date - a.date)
        }
        else if (sortBy == 'rating'){
            newData.sort((a, b) => b.rating - a.rating)
        }
        else if (sortBy == 'date_asc'){
            newData.sort((a, b) => a.date - b.date)
        }
        else if (sortBy == 'rating_asc'){
            newData.sort((a, b) => a.rating - b.rating)
        }
        setProductReview(newData)
 
    }, [sortBy]);

    function createReview(value){
        value = value.trim();
        if (value.length < 1)
            return;
        let reviewObject = {
            name: "New User",
            userReview: value,
            date: new Date(Date.now()),
            rating: 5
        }

        let newproductReviews = [reviewObject, ...productReviews];
        setProductReview(newproductReviews);
        console.log('sorb:', sortBy)
        console.log("nextlin")
    }
    return (
        <div className="product-review-container">
            <div className="product-review-summary-column">
                {/* <Product image={productImage} title={productTitle}/> */}
                <ReviewSummary productReviews={productReviews} />
                <div className="sortby-row">
                    Sort By: <select onChange={(e) => setSortBy(e.target.value)}>
                        {sortByAttributes.map((attribute, index) => (
                            <option value={attribute.value}>{attribute.label}</option>
                        ))}
                    </select>
                </div>
                <EditableContent handleSubmit={createReview} placeholder="Submit review"/>
                
            </div>
            
            {/* <ReviewCreator review={} rating={} user={}/> */}
            <div className="user-review-column">
                <Reviews productReviews={productReviews} />
            </div>
        </div>
    )
}