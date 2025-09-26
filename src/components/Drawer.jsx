import { useState } from "react"
import { Plus, X, Minus } from "lucide-react";

import './Drawer.css';

function Counter() {
    const [count, setCount] = useState(0);
    return (

        <div className="counter">
            <button onClick={() => setCount(Math.max(0, count - 1))}><Minus size={15} /></button>
            <span className="count">{count}</span>
            <button onClick={() => setCount(Math.min(5000, count + 1))}><Plus size={15} /></button>
        </div>

    )
}

export function Drawer() {
    
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div className='drawer-container'  >
            {isVisible ? <button className="user-button" onClick={() => setIsVisible(false)}>Hide Drawer</button> : <button className="user-button" onClick={() => setIsVisible(true)}>Show Drawer</button>}
            {
                isVisible &&
                <div className="drawer">
                    {/* <button   onClick={() => setIsVisible(false)} className="close-button"><X size={15}/></button> */}
                    <h2>Set your calorie count</h2>
                    <p>Daily calorie intake</p>
                    <Counter />
                    <button className="user-button">Submit</button>
                    <button className="user-button">Cancel</button>
                </div>
            }
        </div>
    )
}