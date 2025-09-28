import React from 'react'
import './ImageCarousel.css'
import Product1 from '../assets/images/shoe-1.jpg';
import Product2 from '../assets/images/shoe-2.jpg';
import Product3 from '../assets/images/shoe-3.jpg';
import Product4 from '../assets/images/shoe-4.jpg';
import Product5 from '../assets/images/shoe-5.jpg';

const Mycard = ({ cardno, imageSrc}) => {
    return (
        // <div className='mycard'>Mycard No. {props.cardno}</div>
        <div className='mycard'>
            <img className='product-image' src={imageSrc}/>
        </div>
    )
}

export function Imagecarousel(){
    let sampleImages = [Product1, Product2, Product3, Product4, Product5,
                        Product1, Product2, Product3, Product4, Product5,
                        Product1, Product2, Product3, Product4, Product5,
    ]
    let box = document.querySelector('.product-container');

    const btnpressprev = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
        console.log(width)
    }

    const btnpressnext = () => {
        console.log("Next");
        console.log(box)
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
        console.log(width)
    }
    return (
        <div className="product-carousel">
            <button className="pre-btn" onClick={btnpressprev}><p>&lt;</p></button>
            <button className="next-btn" onClick={btnpressnext}><p>&gt;</p></button>


            <div className="product-container">
                {sampleImages.map((imageSrc, index) => (
                    <Mycard imageSrc={imageSrc} cardno={index}/>
                ))}
            </div>
        </div>
    )
}

export default Imagecarousel