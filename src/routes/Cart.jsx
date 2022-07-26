import Carte from '../components/Cart'
import Header from '../components/Header'
import CartData from '../data/CartData'


export default function Cart() {
    const CartPack = CartData.map(cartItem =>{
        return<Carte
        key={cartItem.id}
        {...cartItem}
        />
    })
    return (
    <div>
        <Header/>
        <div className='Cart-cont'> 
        {CartPack}
        </div>
        <div className='checkout'>
            <button className='checkout-btn'>Proceed to checkout</button>
            <button className='clCart-btn'>Clear cart</button>
        </div>
    </div>
    );
}