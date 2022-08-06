import Fav from '../components/favourits/Favorites'
import Header from '../components/nav bar/Header'
import FavData from '../data/favoritesData'



export default function Favorites() {
    function clearFavorits(){
        localStorage.setItem('favorite',JSON.stringify([]))
        window.location.reload();
    }
    const favPack = FavData.map(favItem =>{
        return<Fav
        key={favItem.id}
        {...favItem}
        />
    })
    return (
    <div>
        <Header/>
        <div className='fav-cont'> 
        {favPack}
        <button className='clear-fav-btn' onClick={clearFavorits}>clear Saved products</button>
        </div>
    </div>
    );
}