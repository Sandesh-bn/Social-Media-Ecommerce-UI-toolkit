import { useState } from 'react';
import './ImageSlider.css';
import { ArrowLeft, ArrowRight, Circle, CircleDot } from "lucide-react";
import car1 from '../assets/images/car-1.jpg';
import car2 from '../assets/images/car-2.jpg';
import car3 from '../assets/images/car-3.jpg';
import car4 from '../assets/images/car-4.jpg';
import car5 from '../assets/images/car-5.jpg';


export function ImageSlider() {
    let imagesArray = [car2, car3, car4, car5];
    const [imageIndex, setImageIndex] = useState(0);

    function showNextImage() {
        setImageIndex((imageIndex + 1) % imagesArray.length);
    }

    function showPrevImage() {
        if (imageIndex == 0) {
            setImageIndex(imagesArray.length - 1)
        }
        else {
            setImageIndex(imageIndex - 1);
        }

    }

    return (
        <div className='image-container'>
            <button className='image-button left-button' onClick={showPrevImage}>
                <ArrowLeft size={15} />
            </button>
            <div style={{ width: '100%', height: '100%' }}>
                <img className='image' src={imagesArray[imageIndex]} />
            </div>
            <button className='image-button right-button' onClick={showNextImage}>
                <ArrowRight size={15} />
            </button>
            {imagesArray.map((item, index) => (
                <button className={index == imageIndex? 'nav-button highlight':'nav-button'} onClick={() => setImageIndex(index)}>{''}</button>
            ))}
        </div>
    )
}

