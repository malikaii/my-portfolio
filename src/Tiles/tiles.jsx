import React from 'react'

function Tiles() {
  return (
    <>
        <div class="tile is-ancestor">
            <div class="tile is-child notification is-primary">
                {/* <!-- Add content or other tiles --> */}
                <h1>Goes over here</h1>
            </div>
            <div class="tile is-child notification is-primary">
                <h1>Goes over here</h1>
                {/* <!-- Add content or other tiles --> */}
            </div>
        </div>
    </>
  )
}

export default Tiles;