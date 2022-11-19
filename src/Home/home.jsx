import React from 'react'
import Foot from '../Footer/footer';
import Navbar from '../Navbar/navbar';
import './home.css';
import Image from '../stock_img.jpg'

function Home() {
  return (
    <div className='main'>
        <Navbar/>
        <div className="content">
            <div className="left">
                <h1>Hey, my name is Malick</h1>
                <p>Check out my stuff!</p>
            </div>
            <div className='right'>
                <img  src={Image} alt="ImageNotFound" />
            </div>  
        </div>
        <Foot/>
    </div>
  )
}

export default Home;