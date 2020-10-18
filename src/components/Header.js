import React from "react";
import {Link} from 'react-router-dom'
import logo from "../assets/spa-shop-sm.png"
import CartLink from './Cart/CartLink'

const Header = () =>{
  return <header className="header">
    <img src={logo} alt="spa logo" className="logo"/>
    <nav>
      <ul>
        <div>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/products">Products</Link></li>
        </div>
        <div>
          <li><Link to="/login">Login</Link></li>
          <CartLink/>
        </div>
      </ul>
    </nav>
    </header>;
}

export default Header;
