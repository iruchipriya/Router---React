import React from 'react';
import './style.css';
import { Route, Link, Switch, Routes, NavLink } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Products from './Products';
import Home from './Home';

function App() {
  return (
    <div>
      <p>Start editing to see some magic happen :)</p>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/product">Products</Link>
          </li>
          <li>
            <NavLink
              to="/contact"
              exact
              className={({ isActive }) => ({ color: isActive ? 'red' : '' })}
            >
              contact
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/products/*" element={<Products />} /> is used to define a nested route structure for the /products path. The * wildcard allows the Products component to match and render nested routes. This is particularly useful when you have a base route (like /products */}
        <Route path="/product/*" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
