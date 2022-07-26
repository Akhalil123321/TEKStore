import Fav from '../components/Favorites'
import Header from '../components/Header'
import FavData from '../data/favoritesData'


export default function Favorites() {
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
    </div>
    );
}