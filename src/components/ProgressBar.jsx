import { useEffect, useState } from "react";
import './ProgressBar.css';


export function ProgressBar() {

    function CircularProgressBar({ size = 120, strokeWidth = 10 }) {
        const [progress, setProgress] = useState(0);

        useEffect(() => {
            const timer = setInterval(() => {
                setProgress(prev => (prev >= 100 ? 0 : prev + 5));
            }, 2000);

            return () => clearInterval(timer); // cleanup when unmounted
        }, []); // run once on mount

        // Calculate the radius of the circle (half of size, minus stroke so it fits inside the SVG)
        const radius = (size - strokeWidth) / 2;
        const circumference = 2 * Math.PI * radius;

        // how much is left? 100% is 0, 75% is 25 ...
        const offset = circumference - (progress / 100) * circumference;

        return (
            <svg width={size} height={size}>
                <circle
                    stroke="#e6e6e6"
                    fill="transparent"  // inside is transparent
                    strokeWidth={strokeWidth}
                    r={radius}
                    cx={size / 2} // x center
                    cy={size / 2} // y center
                />
                <circle
                    stroke="lightgreen"
                    fill="transparent" // inside is transparent
                    strokeWidth={strokeWidth}
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                    strokeDasharray={circumference} // unfilled part
                    strokeDashoffset={offset} // unfilled part
                    style={{ transition: "stroke-dashoffset 0.5s ease" }}
                />
                <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dy=".3em"
                    fontSize="20"
                    fill="#333"
                >
                    {progress}%
                </text>
            </svg>
        );
    }

    function AutoProgressBar() {
        const [progress, setProgress] = useState(0);

        useEffect(() => {
            const timer = setInterval(() => {
                setProgress(prev => (prev >= 100 ? 0 : prev + 5));
            }, 2000);

            return () => clearInterval(timer); // cleanup when unmounted
        }, []); // run once on mount


        return (
            <div className="auto-progressbar-container">
                <div className="auto-progress-status" style={{ width: `${progress}%` }}></div>
            </div>
        )
    }

    function BasicProgressBar() {
        const [progress, setProgress] = useState(30);
        return (
            <div className="basic-progressbar-container">
                <div className="progress-status" style={{ width: `${progress}%` }}></div>
            </div>
        )
    }

    return (
        <div className="progress-container">
            <div>
                <p>Basic Progress bar:</p> <BasicProgressBar />
            </div>

            <div>
                <p>Auto Progress bar:</p><AutoProgressBar />
            </div>
            <div>
                <p>Circular Progress bar:</p> <CircularProgressBar />
            </div>
        </div>
    )
}

/*
    auto progress bar
    manual increment
    color change animation
    circular

*/