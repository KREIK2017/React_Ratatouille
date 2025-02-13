// Recipes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Dessert, Drinks, MainDishes, Salads, Soups } from './catalog';
import '../../css/recipes/recipes.css'; 
import RecipesMenu from './RecipesMenu';

function Recipes() {
  return (
    <div className="recipes-container">
      
      <Routes>
        <Route path="*" element={<RecipesMenu />} />
        <Route path="Soups/*" element={<Soups />} />
        <Route path="MainDishes/*" element={<MainDishes />} />
        <Route path="Salads/*" element={<Salads />} />
        <Route path="Desserts/*" element={<Dessert />} />
        <Route path="Drinks/*" element={<Drinks />} />
      </Routes>
    </div>
  );
}

export default Recipes;
