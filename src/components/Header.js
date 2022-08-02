import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import CartData from '../data/CartData'
import React from "react";
export default function Header() {
    const [cartNumber]=React.useState(CartData.length)
    const [toggleList, setToggleList]=React.useState(false)
    function openList(){
        setToggleList(!toggleList)
        console.log(toggleList);
    }
    const headList = toggleList ? 'head-list-open' : 'head-list'
    return(
    <div className='head-bar'>
        <Link to="/Main" className='logo-img'><img src='./images/tek logo.png' className='logo-img' alt=''/></Link>
        <ul className={headList}>
            <Link to="/Main" className="link-color" ><li>Home</li></Link>
            <hr className="line"/>
            <Link to="/Offers" className="link-color" ><li>Offers</li></Link>
            <hr className="line"/>
            <Link to="/Savedproducts" className="link-color" ><li>Saved products</li></Link>
            <hr className="line"/>
            <Link to="/Orders" className="link-color" ><li>Orders</li></Link>
            <hr className="line"/>
            <div className='right-head'>
            <Link to="/Cart" className="link-color" >
                <li>
                    <div className='cart-area'>
                        <span className="cart-word">Cart({cartNumber})</span>
                        <img src='./images/cart.png' alt='' className='cart-img'/>
                    </div>
                </li>
            </Link>
            <hr className="line"/>
            <li>
                <Link to="/Signin" className="link-color" >
                    <button className='sign-btn'>sign in</button>
                </Link>
            </li>
        </div>
        </ul>
        <button className="list-btn" onClick={openList}>
            <FaAlignRight className="list-icon"/>
        </button>
    </div>
)
}