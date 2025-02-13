// Recipe.js
import React from 'react';
import '../../../css/recipes/allrecipes.css'
import { recipes } from './recipes';
const RecipeDisplay = ({ recipeId }) => {
    const recipe = recipes.find((r) => r.id === recipeId);

    if (!recipe) {
        return <div>Рецепт не знайдено</div>;
    }
    return (
        <div className="recipe-container">
            <header>
                <h1>{recipe.title}</h1>
            </header>

            <main>
                <img className="recipe-image" src={recipe.imgs && recipe.imgs.length > 0 ? recipe.imgs[0] : ''} alt="Фото блюда" />
                <section className="ingredient-section">
                    <h2>ІНГРЕДІЄНТИ:</h2>
                    <ul>
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    <h3>Для заправки:</h3>
                    <ul>
                        {recipe.spices.map((spice, index) => (
                            <li key={index}>{spice}</li>
                        ))}
                    </ul>
                </section>

                <section className="recipe-section">
                    <h2>ПОКРОКОВИЙ РЕЦЕПТ:</h2>
                    <ol>
                        {recipe.steps.map((step, index) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ol>
                </section>

                <p className="final-note">Готувати – це просто!</p>
            </main>
        </div>
    );
};

export default RecipeDisplay;
