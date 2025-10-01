import { Star } from "lucide-react";
import './StarRating.css';
import { useState } from "react";

export function StarRating({ handleRating }){
    const [rating, setRating] = useState(0);
    function handleHover(index){
        console.log('hh', index)
    }

    function handleClick(rating){
        setRating(rating);
        handleRating(rating);
    }

    return(
        <div>
        {[1, 2, 3, 4, 5].map((value, index) => (
            <Star onClick={() => handleClick(value)} className="star-rating-review" fill={value <= rating? 'gold': 'none'} onMouseOver={()=>handleHover(rating)} color={'yellow'}/>
        ))}
        </div>
    )
}