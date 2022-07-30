import { Link } from "react-router-dom";
import CartData from '../data/CartData'
import React from "react";
export default function Header() {
    const [cartNumber]=React.useState(CartData.length)
    return(
    <div className='head-bar'>
        <Link to="/Main" className='logo-img'><img src='./images/tek logo.png' className='logo-img' alt=''/></Link>
        <ul className='head-list'>
            <li><Link to="/Main" className="link-color">Home</Link></li>
            <li><Link to="/Offers" className="link-color">Offers</Link></li>
            <li><Link to="/Savedproducts" className="link-color">Saved products</Link></li>
            <li><Link to="/Orders" className="link-color">Orders</Link></li>
            <div className='right-head'>
            <li>
                <Link to="/Cart" className="link-color">
                    <div className='cart-area'>
                        <span className="cart-word">Cart({cartNumber})</span>
                        <img src='./images/cart.png' alt='' className='cart-img'/>
                    </div>
                </Link>
            </li>
            <li>
                <Link to="/Signin" className="link-color">
                    <button className='sign-btn'>sign in</button>
                </Link>
            </li>
        </div>
        </ul>
    </div>
)
}