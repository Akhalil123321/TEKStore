import Fav from '../components/Favorites'
import Header from '../components/Header'
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
        <div className='Cart-cont'> 
        {favPack}
        </div>
        <button className='clear-fav-btn' onClick={clearFavorits}>clear Saved products</button>
    </div>
    );
}