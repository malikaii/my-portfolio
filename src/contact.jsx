import React from 'react'
import './contact.css'

function Contact() {
  return (
    <div className='container has-text-centered' id='contact'>
        <h3>You can reach me via</h3>
        <div className='icons'>
          <a href='https://www.linkedin.com/in/malick-ouedraogo-23b121191/' target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i></a>
          <a href='https://github.com/malikaii' target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a>
        </div>
    </div>
  )
}

export default Contact;