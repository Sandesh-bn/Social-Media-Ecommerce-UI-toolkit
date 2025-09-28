

export function BasicProgressBar({ currentProgress, totalProgress, color}) {
    let progressPercentage = (currentProgress/totalProgress) * 100;
    return (
        <div className="basic-progressbar-container">
            <div className="progress-status" style={{ width: `${progressPercentage}%`, background: color }}></div>
        </div>
    )
}