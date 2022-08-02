import Fav from '../components/Favorites'
import Header from '../components/Header'
import FavData from '../data/favoritesData'
import Footer from '../components/Footer'



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
        <Footer/>
    </div>
    );
}