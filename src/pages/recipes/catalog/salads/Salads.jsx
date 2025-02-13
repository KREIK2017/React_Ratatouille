// Recipes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SaladsMenu from './SaladsMenu';
import RecipeDisplay from '../recipespage';

function Salads() {
  return (
    <div className="recipes-container">
      
      <Routes>
        <Route path="*" element={<SaladsMenu />} />
        <Route path="salad-recipe1" element={<RecipeDisplay recipeId={7} />} />
        <Route path="salad-recipe2" element={<RecipeDisplay recipeId={8} />} />
        <Route path="salad-recipe3" element={<RecipeDisplay recipeId={9} />} />
      </Routes>
    </div>
  );
}

export default Salads;
