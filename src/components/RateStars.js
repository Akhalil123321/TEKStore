/* eslint-disable jsx-a11y/alt-text */
import React from "react"

export default function SetStars() {
    const [Stars, setStars] = React.useState({
        isFavorite1: false,
        isFavorite2: false,
        isFavorite3: false,
        isFavorite4: false,
        isFavorite5: false
    })
    
    let starIcon1 = Stars.isFavorite1 ? "star-filled.png" : "star-empty.png"
    let starIcon2 = Stars.isFavorite2 ? "star-filled.png" : "star-empty.png"
    let starIcon3 = Stars.isFavorite3 ? "star-filled.png" : "star-empty.png"
    let starIcon4 = Stars.isFavorite4 ? "star-filled.png" : "star-empty.png"
    let starIcon5 = Stars.isFavorite5 ? "star-filled.png" : "star-empty.png"
    
    function toggleFavorite1() {
        setStars(prevStars => {
            return {
                isFavorite1: true ,
                isFavorite2: false ,
                isFavorite3: false ,
                isFavorite4: false ,
                isFavorite5: false ,
            }
        })
    }
    function toggleFavorite2() {
        setStars(prevStars => {
            return {
                isFavorite1: true ,
                isFavorite2: true ,
                isFavorite3: false ,
                isFavorite4: false ,
                isFavorite5: false ,            
            }
        })
    }
    function toggleFavorite3() {
        setStars(prevStars => {
            return {
                isFavorite1: true ,
                isFavorite2: true ,
                isFavorite3: true ,
                isFavorite4: false ,
                isFavorite5: false ,
            }
        })
    }
    function toggleFavorite4() {
        setStars(prevStars => {
            return {
                isFavorite1: true ,
                isFavorite2: true ,
                isFavorite3: true ,
                isFavorite4: true ,
                isFavorite5: false ,
            }
        })
    }
    function toggleFavorite5() {
        setStars(prevStars => {
            return {
                isFavorite1: true ,
                isFavorite2: true ,
                isFavorite3: true ,
                isFavorite4: true ,
                isFavorite5: true ,
            }
        })
    }
    return (
                <div className="stars--info">
                    <img 
                        src={`./images/${starIcon1}`} 
                        className="star--favorite"
                        onClick={toggleFavorite1}
                    />
                    <img 
                        src={`./images/${starIcon2}`} 
                        className="star--favorite"
                        onClick={toggleFavorite2}
                    />
                    <img 
                        src={`./images/${starIcon3}`} 
                        className="star--favorite"
                        onClick={toggleFavorite3}
                    />
                    <img 
                        src={`./images/${starIcon4}`} 
                        className="star--favorite"
                        onClick={toggleFavorite4}
                    />
                    <img 
                        src={`./images/${starIcon5}`} 
                        className="star--favorite"
                        onClick={toggleFavorite5}
                    />
                </div>
                
    )
}
/*css style 
.star--info {
    padding: 10px;
}

.star--favorite {
    width: 25px;
    cursor: pointer;
}*/
