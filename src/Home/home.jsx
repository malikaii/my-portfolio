import React from 'react'
import './home.css';
import Image from '../stock_img.jpg'
import Foot from '../Footer/footer';
function Home() {
  return (
    <div>
        <div className="content">
            <div className="left">
                <h1>Hey, my name is Malick</h1>
                <p>Check out my stuff!</p>
            </div>
            <div className='right'>
                <img id="profile-pic"  src={Image} alt="ImageNotFound" />
            </div>  
        </div>
        
    </div>
  )
}

export default Home;