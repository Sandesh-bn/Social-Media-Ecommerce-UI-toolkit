import { useState } from 'react';
import './HoverCard.css';

export function HoverCard(){
    const [isVisible, setIsVisible] = useState(false)
    function Card(){
        return(
            <div className='card'>
                <b>Heading</b>
                <p>Some paragraph content</p>
                <p>- By author</p>
            </div>
        )
    }

    return(
        <div className='container'>
            <button className='hover-button' 
                    onMouseLeave={() => setIsVisible(false)}
                    onMouseOver={() => setIsVisible(true)}>Hover over me</button>
            {isVisible && <Card/>}
        </div>
    )
}