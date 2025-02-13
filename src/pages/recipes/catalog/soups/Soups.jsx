// Recipes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SoupsMenu from './SoupsMenu';
import RecipeDisplay from '../recipespage';
function Soups() {
  return (
    <div className="recipes-container">
      
      <Routes>
        <Route path="*" element={<SoupsMenu />} />
        <Route path="soup-recipe1" element={<RecipeDisplay recipeId={1} />} />
        <Route path="soup-recipe2" element={<RecipeDisplay recipeId={2} />} />
        <Route path="soup-recipe3" element={<RecipeDisplay recipeId={3} />} />
      </Routes>
    </div>
  );
}

export default Soups;
