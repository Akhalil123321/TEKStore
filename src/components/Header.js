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
    function closeList(){
        setToggleList(false)
    }
    return(
    <div className='head-bar'>
        <Link to="/Main" className='logo-img'><img src='./images/tek logo.png' className='logo-img' alt=''/></Link>
        <ul className={headList}>
            <li><Link to="/Main" className="link-color" onClick={closeList}>Home</Link></li>
            <hr className="line"/>
            <li><Link to="/Offers" className="link-color" onClick={closeList}>Offers</Link></li>
            <hr className="line"/>
            <li><Link to="/Savedproducts" className="link-color" onClick={closeList}>Saved products</Link></li>
            <hr className="line"/>
            <li><Link to="/Orders" className="link-color" onClick={closeList}>Orders</Link></li>
            <hr className="line"/>
            <div className='right-head'>
            <li>
                <Link to="/Cart" className="link-color" onClick={closeList}>
                    <div className='cart-area'>
                        <span className="cart-word">Cart({cartNumber})</span>
                        <img src='./images/cart.png' alt='' className='cart-img'/>
                    </div>
                </Link>
            </li>
            <hr className="line"/>
            <li>
                <Link to="/Signin" className="link-color" onClick={closeList}>
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