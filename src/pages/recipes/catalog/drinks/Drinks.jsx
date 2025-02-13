// Recipes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DrinksMenu from './DrinksMenu';
import RecipeDisplay from '../recipespage';

function Drink() {
  return (
    <div className="recipes-container">
      
      <Routes>
        <Route path="*" element={<DrinksMenu />} />
        <Route path="drink-recipe1" element={<RecipeDisplay recipeId={13} />} />
        <Route path="drink-recipe2" element={<RecipeDisplay recipeId={14} />} />
        <Route path="drink-recipe3" element={<RecipeDisplay recipeId={15} />} />
      </Routes>
    </div>
  );
}

export default Drink;
