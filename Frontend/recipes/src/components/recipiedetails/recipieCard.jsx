import React, { useState } from 'react';

const RecipieDetails = ({recipie}) => {
    const [showInstctructions, setShowInstructions] = useState(true);

    const toggleInstructions = () => {
        setShowInstructions(!showInstctructions);
    }


    return (
        <div>
            <h2>{recipie.title}</h2>
            <img src={recipie.image} alt={recipie.title}/>
            <div>
                <button onClick={toggleInstructions}>{showInstctructions ? 'Ingredients' : 'Instructions'}</button>
            </div>
            {showInstctructions ? (
                <div>
                    <h3>Ingredients</h3>
                    <ul>
                        {recipie.ingredients.map((ingredient) => (
                            <li key={ingredient}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div>
                    <h3>Instructions</h3>
                    <p>{recipie.instructions}</p>
                </div>
            )}
        </div>
    );
};
export default RecipieDetails;