import React from 'react';
import './Tree.css';
// Import your images for each stage
import seedImage from './assets/seed.png';
import seedlingImage from './assets/seedling.png';
import saplingImage from './assets/sapling.png';
import largeSaplingImage from './assets/large-sapling.png';
import fruitImage from './assets/fruit.png';

const Tree = ({ timeLeft, totalTime }) => {
    const growthPercentage = ((totalTime - timeLeft) / totalTime) * 100;

    const renderTree = () => {
        if (growthPercentage < 20) {
            return <img className="tree-stage" src={seedImage} alt="Seed" />;
        } else if (growthPercentage < 40) {
            return <img className="tree-stage" src={seedlingImage} alt="Seedling" />;
        } else if (growthPercentage < 60) {
            return <img className="tree-stage" src={saplingImage} alt="Sapling" />;
        } else if (growthPercentage < 80) {
            return <img className="tree-stage" src={largeSaplingImage} alt="Large Sapling" />;
        } else {
            return <img className="tree-stage" src={fruitImage} alt="Fruit" />;
        }
    };

    return (
        <div className="tree-container">
            {renderTree()}
        </div>
    );
};

export default Tree;
