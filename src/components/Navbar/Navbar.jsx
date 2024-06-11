import React from 'react'
import { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"
import logo from "../Assets/logo.png";
import cartIcon from "../Assets/cart_icon.png";
import ShopContext from "../../Context/ShopContext";

const Navbar = () => {

    const [menu, setMenu] = useState("shop")
    const {getTotalCartItems} = useContext(ShopContext);

  return (
     <div className="navbar">
        <div className="nav-logo">
            <Link to='/'><img src={logo} alt="" /></Link>
            <Link to='/'><p>Stylizy</p></Link>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}> <Link to='/'> Shop </Link>{menu==="shop"?<hr />:<></>}</li>
            <li onClick={()=>{setMenu("men")}}><Link to="/mens"> Men </Link>{menu==="men"?<hr />:<></>}</li>
            <li onClick={()=>{setMenu("women")}}><Link to="/women"> Women </Link>{menu==="women"?<hr />:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link to="/kids"> Kids </Link>{menu==="kids"?<hr />:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button className='btn'>Login</button></Link>
            <Link to='/cart'><img src={cartIcon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
     </div>
  )
}

export default Navbar
