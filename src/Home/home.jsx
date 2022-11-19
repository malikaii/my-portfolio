import React from 'react'
import Foot from '../Footer/footer';
import Navbar from '../Navbar/navbar';
import './home.css';

function Home() {
  return (
    <>
        <Navbar/>
        <div className="intro">
            <h1>
                Welcome to My Portfolio
            </h1>
        </div>
        <Foot/>
    </>
  )
}

export default Home;