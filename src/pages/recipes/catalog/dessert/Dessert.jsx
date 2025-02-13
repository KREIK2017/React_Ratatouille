// Recipes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DessertMenu from './DessertMenu';
import RecipeDisplay from '../recipespage';

function Dessert() {
  return (
    <div className="recipes-container">
      
      <Routes>
        <Route path="*" element={<DessertMenu />} />
        <Route path="dessert-recipe1" element={<RecipeDisplay recipeId={10} />} />
        <Route path="dessert-recipe2" element={<RecipeDisplay recipeId={11} />} />
        <Route path="dessert-recipe3" element={<RecipeDisplay recipeId={12} />} />
      </Routes>
    </div>
  );
}

export default Dessert;
