import React from 'react'
import './home.css';
import TypewriterComponent from 'typewriter-effect';
function Home() {

  const technologies = ['Javascript', 'Java', 'HTML', 'CSS', 'Python', 'SQL'];
  const frameworks = ['React', 'SpringBoot'];

  const faIcons =["fa-brands fa-js", "fa-brands fa-html5", "fa-brands fa-java", "fa-brands fa-python"];

  return (
    <div>
        <div className="content">
            <div className="left">
              <TypewriterComponent
                options={{
                  strings: ['Welcome to my Profile'],
                  autoStart: true,
                  loop: true,
                }} 
              />
            </div>
        </div>
        <div className='has-text-centered'>
          <section className="section is-large">
            <h1 className="title">About Me</h1>
            <p className='bio'>
              Hi, my name is Malick Ouedraogo. I'm a computer science major in my senior year at the University of Louisiana at Lafayette.
              I have two summer's worth of professional experience through internships at IBM as an application developer
              as well as school and outside projects using languages such as Java, Javascript, Python, etc.
              I am searching for a job in the web development industry as either a frontend engineer or backend engineer.

            </p>
          </section>
          <section className="section is-small">
            <h1 className="title">Technologies</h1>
            <div className="columns">
              {
                technologies.map((item, key) => (
                  <div className="column" key={key}>
                    <i className={faIcons}></i>
                    <div className='notification'>
                      <span>{item}</span>
                    </div>
                  </div>
                  
                ))
              }
            </div>
            
          </section>
          <section className="section is-small">
            <h1 className="title">Frameworks</h1>
            <div className="columns">
              {
                frameworks.map((item, key) => (
                  <div className="column" key={key}>
                    <div className='notification'>
                      <span>{item}</span>
                    </div>
                  </div>
                  
                ))
              }
            </div>
            
          </section>
        </div>
        
    </div>
  )
}

export default Home;