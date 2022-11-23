import React from 'react'
import Tiles from '../Tiles/tiles';
import './project.css';
import space from '../spaceinvaders.png'
import animesearch from '../animesearch.png'
function Project() {


  return (
    <>
      <div className='container' id='main-section'>
        <h1 className='is-size-3'>Projects</h1>
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <div class="tile is-child notification is-info">
              <p class="title">Space Invaders</p>
              <p className="subtitle"><i>Python remake of the classic Space Invaders arcade game.</i></p>
              <img src={space} alt="imgnotfound" />
            </div>
          </div>
          <div class="tile is-parent">
            <div class="tile is-child notification is-info">
              <p class="title">Anime Search </p>
              <p className='subtitle'><i>Web app that uses api to retrieve anime search results</i></p>
              <img src={animesearch} alt="imgnotfound" />
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Project;