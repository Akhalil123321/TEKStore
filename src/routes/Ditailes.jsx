import Ditailes from '../components/detailes/Detailes'
import Header from '../components/nav bar/Header'
import DeatailesData from '../data/DeatailesData'


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
    </div>
    );
}