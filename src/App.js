import React from 'react';
import Header from './components/Header'
import Bar from './components/Bar'
import Card from './components/Cards'
import LapData from './data/LapData'
import MobileData from './data/MobileData'
import ComputerData from './data/ComputerData'
import './index.css'
export default function App(){

const LapPack = LapData.map(lapItem =>{
        return<Card
        key={lapItem.id}
        {...lapItem}
        />
})
const MobilePack = MobileData.map(mobileItem =>{
    return<Card
    key={mobileItem.id}
    {...mobileItem}
    />
    
})
const ComputerPack = ComputerData.map(computerTtem =>{
    return<Card
    key={computerTtem.id}
    {...computerTtem}
    />
})
return(
    <div className='all-page'>
        <Header/>
        <Bar title='LapTops'/>
        <div className='cont'> 
        {LapPack}
        </div>
        <Bar title='Mobile Phones'/>
        <div className='cont'> 
        {MobilePack}
        </div>
        <Bar title='Computer Accessories'/>
        <div className='cont'> 
        {ComputerPack}
        </div>
    </div>
)}
// LapTop