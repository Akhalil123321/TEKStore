import Carte from '../components/cart/Cart'
import Header from '../components/nav bar/Header'
import CartData from '../data/CartData'


export default function Cart() {
    function clearCart(){
        localStorage.setItem('cart',JSON.stringify([]))
        window.location.reload();
    }
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
            <button className='clCart-btn' onClick={clearCart}>Clear cart</button>
        </div>
    </div>
    );
}