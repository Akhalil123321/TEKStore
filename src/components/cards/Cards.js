/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from "react-router-dom";
import RateStars from '../rate stars/RateStars'
import CartData from '../../data/CartData'
import DitailesData from '../../data/DeatailesData'
import FavoritesData from '../../data/favoritesData'

// import cart items when reload
// Want to change it soon
if (localStorage.getItem('cart')){
const cartStoarge=JSON.parse(localStorage.getItem('cart'))
    for(let i=0; i < cartStoarge.length;i++){
    CartData.push(cartStoarge[i])
}}

if(localStorage.getItem('favorite')){
// import favourits items when reload
// Want to change it soon
const favoriteStorge=JSON.parse(localStorage.getItem('favorite'))
    for(let i=0; i < favoriteStorge.length;i++){
        FavoritesData.push(favoriteStorge[i])
}
}
// import detailes items when reload
// Want to change it soon
if(localStorage.getItem('detailes')){
const detailStorge=JSON.parse(localStorage.getItem('detailes'))
DitailesData.push(detailStorge[0])
DitailesData.shift()
}
export default function Cards(props){
    // add items to favourit
    const [favorite, setFavorite] = React.useState({
        isFavorite: false
    })
    let heartIcon = favorite.isFavorite ? "heart fill2.png" : "heart empty.png"
    
    function toggleFavorite() {
        setFavorite(prevFavorite => {
            return{
            isFavorite: !prevFavorite.isFavorite
            }
            
        })
        const favoritesData = FavoritesData
        favoritesData.push(props)
        localStorage.setItem('favorite',JSON.stringify(favoritesData))
    }
    // add items to cart
    function addToCart(){
        const cartData = CartData
        cartData.push(props)
        localStorage.setItem('cart',JSON.stringify(CartData))
    }
    // on click to show ditailes
    function showDitailes(){
        const ditailesData = DitailesData
        ditailesData.push(props)
        ditailesData.shift()
        localStorage.setItem('detailes',JSON.stringify(DitailesData))
    }
return(
    <div className='lap-cards'>
        <div className='one-card'>
            <Link to="/Ditailes">
                <img 
                src={`./images/products/${props.img}`} 
                className='card-prop' 
                onClick={showDitailes}
                />
            </Link>
            <div className='card-ditailes'>
                <div className='state'>
                    <RateStars/>
                    <img 
                    src={`./images/${heartIcon}`} 
                    className='heart' 
                    onClick={toggleFavorite}
                    />
                </div>
                <h4 className='lap-name'>{props.name}</h4>
                <h5 className='current-price'>{props.curruntPrise}<sup>{props.cents}</sup> $</h5>
                <h5 className='old-price'>{props.oldPrise} $</h5>
                <Link to="/Cart" className='add-cart'>
                    <button className='card-cart' onClick={addToCart}>
                    <h4>add to cart</h4>
                    <img src='../images/cart.png'/>
                    </button>
                </Link>
            </div>
        </div>
    </div>
)
}

