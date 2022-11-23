import React from 'react'
import { Link } from 'react-router-dom';

function Tab() {
  return (
    <>
        <div class="tabs is-centered">
            <ul>
                <li class="is-active">
                <Link to="/">
                    <span class="icon is-small"><i class="fas fa-image" aria-hidden="true"></i></span>
                    <span>Projects</span>
                </Link>
                </li>
                <li>
                <a>
                    <span class="icon is-small"><i class="fas fa-music" aria-hidden="true"></i></span>
                    <span>Music</span>
                </a>
                </li>
                <li>
                <a>
                    <span class="icon is-small"><i class="fas fa-film" aria-hidden="true"></i></span>
                    <span>Videos</span>
                </a>
                </li>
                <li>
                <a>
                    <span class="icon is-small"><i class="far fa-file-alt" aria-hidden="true"></i></span>
                    <span>Resume</span>
                </a>
                </li>
            </ul>
        </div>
        <div className="tabs is-right">
            
        </div>
    </>
  )
}

export default Tab;