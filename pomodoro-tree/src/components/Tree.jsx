import React from 'react';
import './Tree.css';

const Tree = ({ timeLeft, totalTime }) => {
    const growthPercentage = ((totalTime - timeLeft) / totalTime) * 100;

    const renderTree = () => {
        if (growthPercentage < 25) {
            return <div className="sapling">🌱</div>;
        } else if (growthPercentage < 50) {
            return <div className="sapling sapling-medium">🌱</div>;
        } else if (growthPercentage < 75) {
            return <div className="tree tree-medium">🌳</div>;
        } else {
            return <div className="tree tree-full">🌳</div>;
        }
    };

    return (
        <div className="tree-container">
            {renderTree()}
        </div>
    );
};

export default Tree;

