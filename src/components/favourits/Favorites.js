/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from "react-router-dom";
import CartData from '../../data/CartData'
export default function Favurites(props){
    // cart btn in favourit page
    function addToCart(){
        const cartData = CartData
        cartData.push(props)
        localStorage.setItem('cart',JSON.stringify(CartData))
    }
return(
        <div className='cart-cards-cont'>
            <Link to="/Ditailes" className='cart-cards-cont-link'>
                <img 
                src={`./images/products/${props.img}`} 
                className='cart-cont-img'
                />
            </Link>
            <div className='cart-ditailes'>
                <div className='cart-state'>
                    <h4 className='cart-content-name'>{props.name}</h4>
                </div>
                <p className='cart-discription'>{props.discription}</p>
                <h5 className='car-old-price'>{props.oldPrise} $</h5>
                <h5 className='cart-current-price'>{props.curruntPrise}<sup>{props.cents}</sup> $</h5>
                <Link to="/Cart" className='add-cart'>
                    <button className='favurite-card-cart' onClick={addToCart}>
                        <h4>add to cart</h4>
                        <img src='../images/cart.png'/>
                    </button>
                </Link>
            </div>
        </div>
)
}
