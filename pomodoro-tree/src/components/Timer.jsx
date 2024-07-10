import React, { useState, useEffect } from 'react';
import Tree from './Tree';
import './App.css'; // Import your CSS file with the styles

const Timer = () => {
    const [timeLeft, setTimeLeft] = useState(1500); // 25 minutes
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer;
        if (isRunning && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
        } else if (!isRunning && timeLeft !== 0 && timeLeft !== 1500) {
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [isRunning, timeLeft]);

    const startTimer = () => setIsRunning(true);
    const stopTimer = () => setIsRunning(false);
    const resetTimer = () => {
        setIsRunning(false);
        setTimeLeft(1500);
    };

    return (
        <div className="timer-container">
            <h1 className="timer-display">
                {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? '0' : ''}{timeLeft % 60}
            </h1>
            <div className="timer-buttons">
                <button onClick={startTimer}>Start</button>
                <button onClick={stopTimer}>Stop</button>
                <button onClick={resetTimer}>Reset</button>
            </div>
            <Tree timeLeft={timeLeft} totalTime={1500} />
        </div>
    );
};

export default Timer;