import React, { useState } from 'react'
import './ImageCarousel.css'
import Product1 from '../assets/images/shoe-1.jpg';
import Product2 from '../assets/images/shoe-2.jpg';
import Product3 from '../assets/images/shoe-3.jpg';
import Product4 from '../assets/images/shoe-4.jpg';
import Product5 from '../assets/images/shoe-5.jpg';

const Mycard = ({ cardno, imageSrc, setSelectIndex}) => {
    return (
        // <div className='mycard'>Mycard No. {props.cardno}</div>
        <div  onClick={()=>setSelectIndex(cardno)}  className='mycard'>
            <img className='product-image' src={imageSrc}/>
        </div>
    )
}

export function Imagecarousel(){
    const [selectIndex, setSelectIndex] = useState(0);
    let sampleImages = [Product1, Product2, Product3, Product4, Product5,
                        Product1, Product2, Product3, Product4, Product5,
                        Product1, Product2, Product3, Product4, Product5,
    ]

    const loremIpsum = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";

    let productInfo = [];
    for (let i = 1; i <= 15; i++){
        productInfo.push(
            {name: `Product ${i}`, description: `This is product ${i}. ${loremIpsum}`},
        )
    }

    let box = document.querySelector('.product-container');

    const btnpressprev = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
    }

    const btnpressnext = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
    }
    return (
        <div>
        <div className="product-carousel">
            <button className="pre-btn" onClick={btnpressprev}><p>&lt;</p></button>
            <button className="next-btn" onClick={btnpressnext}><p>&gt;</p></button>
            <div className="product-container">
                {sampleImages.map((imageSrc, index) => (
                    <Mycard setSelectIndex={setSelectIndex} imageSrc={imageSrc} cardno={index}/>
                ))}
            </div>
        </div>
        <div className='product-information'>
            <h1>{productInfo[selectIndex].name}</h1>
            <p>{productInfo[selectIndex].description}</p>
        </div>
        </div>
    )
}

export default Imagecarousel