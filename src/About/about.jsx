import React from 'react'

function About() {
    const frameworks = ['fa-brands fa-react fa-2xl', 'fa-brands fa-bootstrap fa-2xl'];
    const faIcons = ["fa-brands fa-js fa-2xl", "fa-brands fa-html5 fa-2xl", "fa-brands fa-java fa-2xl", "fa-brands fa-python fa-2xl"];
  
  return (
    <div>
        <div className='container has-text-centered'>
          <section className="section is-small">
            <h1 className="title">About Me <i className='fas fa-info-circle'></i></h1>
            <p className='bio'>
              Hi, my name is Malick Ouedraogo. I'm a computer science major in my senior year at the University of Louisiana at Lafayette.
              I have two summer's worth of professional experience through internships at IBM as an application developer
              as well as school and outside projects using languages such as Java, Javascript, Python, etc.
              I am searching for a job in the web development industry as either a frontend engineer or backend engineer.

            </p>
          </section>
          <section className="section is-small">
            <h1 className="title">Technologies</h1>
            <div className="is-centered">
              {
                faIcons.map((item, key) => (
                  <div key={key}>
                    <i className={item} id="frameworks"></i>
                  </div>
                ))
              }
            </div>
            
          </section>
          <section className="section is-small">
            <h1 className="title">Frameworks</h1>
            <div className="is-centered" >
              {
                frameworks.map((item, key) => (
                  <div key={key}>
                    <i className={item} id="frameworks"></i>
                  </div>
                  
                ))
              }
            </div>
          </section>
        </div>
    </div>
  )
}

export default About;