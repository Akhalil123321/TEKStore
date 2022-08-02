/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import CartData from '../data/CartData'
import FavoritesData from '../data/favoritesData'
export default function Cards(props){
    
    function img1Clicked(){
        let largeImg = document.querySelector('.card-dit-img-large')
        largeImg.src=`./images/products/${props.img}`
    }
    function img2Clicked(){
        let largeImg = document.querySelector('.card-dit-img-large')
        largeImg.src=`./images/products/${props.imgdet1}`
    }
    function img3Clicked(){
        let largeImg = document.querySelector('.card-dit-img-large')
        largeImg.src=`./images/products/${props.imgdet2}`
    }
    function img4Clicked(){
        let largeImg = document.querySelector('.card-dit-img-large')
        largeImg.src=`./images/products/${props.imgdet3}`
    }
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
    function addToCart(){
        alert('Added to cart')
        const cartData = CartData
        cartData.push(props)
        localStorage.setItem('cart',JSON.stringify(CartData))
    }
    
return(
    
        <div className='card-dit-container'>
            <div className='card-dit-img-container'>
                <div className='card-dit-img-small'>
                    <img src={`./images/products/${props.img}`} className='card-dit-img' onClick={img1Clicked}/>
                    <img src={`./images/products/${props.imgdet1}`} className='card-dit-img' onClick={img2Clicked}/>
                    <img src={`./images/products/${props.imgdet2}`} className='card-dit-img' onClick={img3Clicked}/>
                    <img src={`./images/products/${props.imgdet3}`} className='card-dit-img' onClick={img4Clicked}/>
                </div>
                <div className='card-dit-img-large-cont'>
                    <img src={`./images/products/${props.imgdet3}`} className='card-dit-img-large'/>
                </div>
            </div>
            <div className='card-dit-information-cont'>
                <div className='card-dit-state'>
                    <h4 className='card-dit-name'>{props.name}</h4>
                    <img src={`./images/${heartIcon}`} className='card-dit-heart' onClick={toggleFavorite}/>
                </div>
                    <p className='card-dit-discription'>{props.discription}</p>
                <div className='card-price-cont'>
                    <h5 className='card-dit-old-price'>{props.oldPrise} $</h5>
                    <h5 className='card-dit-current-price'>{props.curruntPrise}<sup>{props.cents}</sup> $</h5>
                </div>
                <button className='card-dit-add-to-cart' onClick={addToCart}>Add to cart</button>
            </div>
        </div>
            
)
}
