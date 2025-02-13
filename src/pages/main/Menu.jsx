import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "../../css/Main/menu.css";
import {Main,Recipes,About} from "../components";
import restaurantLogo from "../../image/logo.png"
function Menu() {
  return (
    <>
      <Router>
        <div className="menu">
            <div className="logo">
            <img src={restaurantLogo} alt="Назва ресторану" className="logo-img"/>
            </div>
          <ul className="ul-menu">
            
            <li className='li-menu'>
              <Link to="/">Головна</Link>
            </li>
            <li className='li-menu'>
              <Link to="/recipes">Рецепти</Link>
            </li>
            <li className='li-menu'>
              <Link to="/about">Про нас</Link>
            </li>
          </ul>
          </div>
          <Routes>
            <Route path="*" element={<Main />} />
            <Route path="/recipes/*" element={<Recipes />} />
            <Route path="/about" element={<About />} />
          </Routes>

        
      </Router>
    </>
  );
}

export default Menu;
