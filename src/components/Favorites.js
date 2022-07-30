/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import CartData from '../data/CartData'
export default function Favurites(props){
    function addToCart(){
        const cartData = CartData
        cartData.push(props)
    }
return(
        <div className='cart-cards-cont'>
                <img src={`./images/products/${props.img}`} className='cart-cont-img'/>
                <div className='cart-ditailes'>
                <div className='cart-state'>
                    <h4 className='cart-content-name'>{props.name}</h4>
                </div>
                <p className='cart-discription'>{props.discription}</p>
                    <h5 className='car-old-price'>{props.oldPrise} $</h5>
                    <h5 className='cart-current-price'>{props.curruntPrise}<sup>{props.cents}</sup> $</h5>
                    <button className='favurite-card-cart' onClick={addToCart}>
                        <h4>add to cart</h4>
                        <img src='../images/cart.png'/>
                    </button>
                </div>
            </div>
)
}
