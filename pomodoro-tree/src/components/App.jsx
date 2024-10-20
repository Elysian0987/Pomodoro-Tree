import React, { useState } from 'react';
import './App.css';
import Timer from './Timer';
import tomatoBasket from './assets/tomato-basket.png'; // Your basket image
import tomatoImage from './assets/tomato.png'; // Add your tomato image here

function App() {
    const [tomatoes, setTomatoes] = useState(0); // State to track the number of tomatoes

    // Function to call when the user completes a 25-minute session
    const completeSession = () => {
        setTomatoes(prevTomatoes => prevTomatoes + 1);
        // Save tomatoes count to database if required here
    };

    return (
        <div className="app-container">
            {/* Tomato Basket */}
            <img src={tomatoBasket} alt="Tomato Basket" className="tomato-basket" />

            {/* Render tomatoes dynamically */}
            <div className="tomato-count">
                {Array.from({ length: tomatoes }, (_, index) => (
                    <img key={index} src={tomatoImage} alt="Tomato" className="tomato-image" />
                ))}
            </div>

            {/* Timer Component */}
            <header className="App-header">
                <Timer onComplete={completeSession} /> {/* Call completeSession when 25 mins is done */}
            </header>
        </div>
    );
}

export default App;
