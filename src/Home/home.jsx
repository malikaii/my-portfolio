import React from 'react'
import './home.css';
import TypewriterComponent from 'typewriter-effect';
import { Link } from 'react-router-dom';

function Home() {

  return (
    <div>
        <div className="content has-text-centered">
            <div className="typewrite" >
              <TypewriterComponent
                options={{
                  strings: ['Welcome to my Profile'],
                  autoStart: true,
                  loop: true,
              }} 
              />
            </div>
            <Link to="/about" className='button is-success'>Check my Profile!</Link>
        </div>        
    </div>
  )
}

export default Home;