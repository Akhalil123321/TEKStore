/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import FavoritesData from '../data/favoritesData'
export default function Cards(props){
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
    }
return(
    
        <div className='cart-cards'>
                <img src={`./images/products/${props.img}`} className='cart-prop'/>
                <div className='card-ditailes'>
                <div className='cart-state'>
                    <h4 className='cart-content-name'>{props.name}</h4>
                    <img src={`./images/${heartIcon}`} className='cart-heart' onClick={toggleFavorite}/>
                </div>
                <p className='cart-discription'>{props.discription}</p>
                    <h5 className='car-old-price'>{props.oldPrise} $</h5>
                    <h5 className='cart-current-price'>{props.curruntPrise}<sup>{props.cents}</sup> $</h5>
                <button className='buy-now'>Buy Now</button>
                </div>
            </div>
)
}
