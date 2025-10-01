import { useEffect, useState } from "react";
import { BasicProgressBar } from "./BasicProgressBar";
import './ReviewSummary.css';
import { FilledStar } from "./FilledStar";
import { UnfilledStar } from "./UnfilledStar";
export function ReviewSummary(props) {
    const { productReviews } = props;
    
    let reviewCount = 0;
    let averageOfAllReviews = 0;
    let sumOfAllReviews = 0;
    let excellentReviewCount = 0;
    let goodReviewCount = 0;
    let averageReviewCOunt = 0;
    let belowAverageReviewCount = 0;
    let poorReviewCount = 0;
    let reviewSummaryDetails = [];
    const [reviewSummaryData, setReviewSummaryData] = useState([]);
    const totalReview = productReviews.length;
    console.log("inside review summar", productReviews.length)
    console.log("inside review summar tr", totalReview)
    const [overallAverage, setOverallAverage] = useState(0);

    useEffect(() => {
        console.log('useffect $$$')
        for (const review of productReviews) {
            reviewCount++;
            let rating = review.rating;
            sumOfAllReviews += rating;
            if (rating == 5)
                excellentReviewCount++;
            else if (rating == 4)
                goodReviewCount++;
            else if (rating == 3)
                averageReviewCOunt++;
            else if (rating == 2)
                belowAverageReviewCount++;
            else if (rating == 1)
                poorReviewCount++;
        }

        averageOfAllReviews = (sumOfAllReviews / reviewCount);
        reviewSummaryDetails = [
            { "reviewType": "Excellent", "count": excellentReviewCount, color: "lightgreen" },
            { "reviewType": "Good", "count": goodReviewCount, color: "lightgreen" },
            { "reviewType": "Average", "count": averageReviewCOunt, color: "yellow" },
            { "reviewType": "Below Average", "count": belowAverageReviewCount, color: "orange" },
            { "reviewType": "Poor", "count": poorReviewCount, color: "red" }
        ]
        setReviewSummaryData(reviewSummaryDetails);
        setOverallAverage(averageOfAllReviews)
    }, [productReviews]);

    return (
        <div className="review-summary-container">
            <div><b>Overall Ratings</b></div>
            
            <div className="ratings-row">
                <div>{overallAverage.toFixed(2)}</div>
                <div>
                    {[0, 1, 2, 3, 4].map((item, i) => (
                        (i <= overallAverage) ? <span><FilledStar /></span> : <span><UnfilledStar /></span>
                    ))}
                </div>
                <div>
                     Based on {totalReview} ratings
                </div>
            </div>

            {reviewSummaryData.map((reviewdata, index) => (
                <div className="review-summary-row">
                    <div>{reviewdata.reviewType}</div>
                    <BasicProgressBar currentProgress={reviewdata.count} totalProgress={totalReview} color={reviewdata.color} />
                    {/* <div>{Math.floor((reviewdata.count/totalReview) * 100)}%</div> */}
                    <div>{reviewdata.count}/{totalReview}</div>
                </div>
            ))}

        </div>
    )
}