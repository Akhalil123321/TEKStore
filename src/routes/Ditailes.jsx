import Ditailes from '../components/Detailes'
import Header from '../components/Header'
import DeatailesData from '../data/DeatailesData'
import Footer from '../components/Footer'


export default function Cart() {
    const ditailesPack = DeatailesData.map(cartItem =>{
        return<Ditailes
        key={cartItem.id}
        {...cartItem}
        />
    })
    console.log(DeatailesData.length);
    return (
    <div>
        <Header/>
        <div className='card-Ditailes'> 
        {ditailesPack}
        </div>
        <Footer/>
    </div>
    );
}