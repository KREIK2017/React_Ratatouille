// Recipes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainDishesMenu from './MainDishesMenu';
import RecipeDisplay from '../recipespage';

function MainDishes() {
  return (
    <div className="recipes-container">
      
      <Routes>
        <Route path="*" element={<MainDishesMenu />} />
        <Route path="maindishes-recipe1" element={<RecipeDisplay recipeId={4} />} />
        <Route path="maindishes-recipe2" element={<RecipeDisplay recipeId={5} />} />
        <Route path="maindishes-recipe3" element={<RecipeDisplay recipeId={6} />} />
      </Routes>
    </div>
  );
}

export default MainDishes;
