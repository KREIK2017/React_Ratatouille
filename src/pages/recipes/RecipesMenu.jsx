import React from 'react';
import { Link } from 'react-router-dom';
import { soup4 } from '../../image/soups/components';
import { mainDishes4 } from '../../image/main-dishes/components';
import { salad4 } from '../../image/salads/components';
import { dessert4 } from '../../image/dessert/components';
import { drinks4 } from '../../image/drinks/components';
function RecipesMenu() {
    return (
        
        <div className="recipes-menu">
          <h2>Вітаємо в нашому розділі рецептів!</h2>
      <p>
        Оберіть категорію, щоб переглянути рецепти та смачні історії за вашим вибором.
      </p>
        <ul className="menu-list">
        <li className='menu-li'>
          <Link to="/recipes/Soups">
            <img src={soup4} alt="Супи" />
            <p>Супи</p>
          </Link>
        </li>
        <li className='menu-li'>
          <Link to="/recipes/MainDishes">
            <img src={mainDishes4} alt="Головні страви" />
            <p>Головні страви</p>
          </Link>
        </li>
        <li className='menu-li'>
          <Link to="/recipes/Salads">
            <img src={salad4} alt="Салати" />
            <p>Салати</p>
          </Link>
        </li>
        <li className='menu-li'>
          <Link to="/recipes/Desserts">
            <img src={dessert4} alt="Десерти" />
            <p>Десерти</p>
          </Link>
        </li>
        <li className='menu-li'>
          <Link to="/recipes/Drinks">
            <img src={drinks4} alt="Напої" />
            <p>Напої</p>
          </Link>
        </li>
        </ul>
      </div>
    );
}
export default RecipesMenu; 