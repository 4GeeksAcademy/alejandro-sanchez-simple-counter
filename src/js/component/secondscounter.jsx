import React from "react";

let SecondsCounter = ({seconds}) => {
    let paddedSeconds = String(seconds).padStart(6, '0').split('');
    return(
        <div className="d-flex justify-content-center align-items-center bg-dark p-3">
            <div className="bg-secondary text-white fs-1 rounded p-2 mx-1">
                <span>⏱️</span>
            </div>
            {paddedSeconds.map((digit, index) => (
                <div key={index} className="bg-secondary text-white rounded p-2 mx-1 fs-1">
                    {digit}
                </div>
            ))}      
        </div>
    )
}

export default SecondsCounter;