import React from 'react'
import './skills.css'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { useState, useEffect } from 'react';


const Experience = () => {
  const width = 100;
  const percent = 90;
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    setValue(percent * width);
  });
  return (
    <>
      <section id="skills" class="skills">
          <div class="section-title" data-aos="fade-up" data-aos-once='true'>
            <h2>Skills</h2>
            <p>I am a backend web developer with more than 6 months experience. I use Backend libraries like Laravel, Node.Js, Express.Js</p>
          </div>
          <div class="container-fluid">
            <div class="row">
              <div class="col">
                <div class="row mask-custom d-flex skills-content text-center p-3" data-aos="fade-right" data-aos-once='true'>
                  <div class="col-6">
                    <span>HTML/CSS</span>
                    <img class="ms-2" src="assets/img/skills/html.png" width={25}/>
                    <img class="ms-2" src="assets/img/skills/css-3.png" width={25}/>
                    <p>90%</p>
                    <ProgressBar animated now={90} />            
                    <span>Javascript</span>
                    <img class="ms-2" src="assets/img/skills/js.png" width={25}/>
                    <p>70%</p>
                    <ProgressBar animated now={70} />           
                    <span>PHP</span>
                    <img class="ms-2" src="assets/img/skills/php.png" width={35}/>
                    <p>70%</p>
                    <ProgressBar animated now={70} />                       
                    <span>Photoshop</span>
                    <img class="ms-2" src="assets/img/skills/photoshop.png" width={25}/>
                    <p>50%</p>
                    <ProgressBar animated now={50} />         
                  </div>
                  <img class='img-skill' src="assets/img/skills.svg" alt="" />
                </div>
              </div>
            </div>

          </div>
      </section>
    </>
  )
}

export default Experience