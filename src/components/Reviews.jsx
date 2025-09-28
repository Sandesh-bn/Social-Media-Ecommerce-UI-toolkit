
import { FilledStar } from "./FilledStar";
import { UnfilledStar } from "./UnfilledStar";
import './Reviews.css';
export function Reviews({ productReviews }) {

    function Review({ name, review, rating, date }) {

        function getDateString(date) {
            return date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            })
        }

        return (
            <div className="review-item">
                <div className="reviewer-row">
                    <div>
                        <div><b>{name}</b></div>
                        <div>
                            {[0, 1, 2, 3, 4].map((item, i) => (
                                (i <= rating) ? <span><FilledStar /></span> : <span><UnfilledStar /></span>
                            ))}
                        </div>
                    </div>
                     <div className="review-date">{getDateString(date)}</div>
                </div>
                <div className="reviewer-content">{review}</div>
            </div>
        )
    }

    return (
        <div>
            {productReviews.map((review, index) => (
                <Review date={review.date} name={review.name} rating={review.rating} review={review.userReview} />
            ))}
        </div>
    )
}