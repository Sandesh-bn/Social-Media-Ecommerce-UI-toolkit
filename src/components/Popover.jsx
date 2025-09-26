import { useState } from 'react';
import './Popover.css';

export function Popover() {
    const [isVisible, setIsVisible] = useState(false)
    function Card() {
        return (
            <div className='popover-card'>
                <b>Set dimensions</b>
                <div className="row">
                    <div>Width: </div>
                    <input type="number" name="" id="" />
                </div>
                <div className="row">
                    <div>Height: </div>
                    <input type="number" name="" id="" />
                </div>
                <div className="row">
                    <div>Threshold %: </div>
                    <input type="number" name="" id="" />
                </div>
            </div>
        )
    }

    return (
        <div className='container'>
            {isVisible ? <button className='hover-button'
                onClick={() => setIsVisible(false)}>Close popover</button>
                :
                <button className='hover-button'
                    onClick={() => setIsVisible(true)}>Open popover</button>
            }
            {isVisible && <Card />}
        </div>
    )
}