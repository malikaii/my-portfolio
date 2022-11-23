import React from 'react'
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className='has-text-centered is-size-3'>
        <h1>The page you are looking for does not exist</h1>
        <p>Click <Link to="/">here</Link> to go home</p>
    </div>
  )
}

export default ErrorPage;