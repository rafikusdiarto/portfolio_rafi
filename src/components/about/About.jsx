import React from 'react'
import './about.css'
import { saveAs } from "file-saver";
import { Link } from 'react-router-dom';

export const about = () => {
  // const saveFile = () => {
  //   saveAs(
  //     "CV Muhammad Rafi Kusdiarto"
  //   );
  // };
    return (
    <>
    {/* about */}
    <section id="about">
      
      {/* <div class="jumbotron p-5">
        <h1>Jumbotron Example</h1>
        <p>Lorem ipsum...</p>
      </div> */}
      <div class="jumbotron">
        
        <div class="container fluid inner-header">
          <div class="row justify-content-center">
            <div class="foto row d-flex my-5">
              <img src="../assets/img/aku.jpg" class="image col-xl-5 d-flex " alt="" />
              <div class="col-6 mt-5">
                <div class="mask-custom shadow-lg mt-4">
                  <div class="card-body p5">
                    <h2 class="my-2 text-white">Hello I'm</h2>
                    <h1 class="text-white"><span>Muhammad Rafi Kusdiarto</span></h1>
                    <h5 class="mt-2 text-white">Backend Web Developer</h5>
                    <div class="icon my-3">
                      <a href="https://github.com/rafikusdiarto?tab=repositories" class="btn btn-social-icon btn-github">
                        <span class="fa fa-github "></span>
                      </a>
                      <a href="https://www.instagram.com/muhmmad.rafii/" class="btn btn-social-icon btn-instagram mx-4">
                        <span class="fa fa-instagram "></span>
                      </a>
                      <a href="https://www.linkedin.com/in/muhammad-rafi-kusdiarto-265a09218/" class="btn btn-social-icon btn-linkedin me-4">
                        <span class="fa fa-linkedin "></span>
                      </a>
                      <a href="https://www.facebook.com/profile.php?id=100005698544779" class="btn btn-social-icon btn-facebook">
                        <span class="fa fa-facebook "></span>
                      </a>

                      <p class="text-white">I am a trying to be backend web developer</p>
                      <div class="flex">
                        <div class="">
                          <a href='https://api.whatsapp.com/send/?phone=6287809680106&text&app_absent=0' class="btn btn-success btn-lg me-3 shadow-lg">Contact Me</a>
                          <a href='https://drive.google.com/file/d/1MS4HH6LKfkByn81yDvd1D73WnqLT1N1D/view?usp=sharing' alt="" class="btn btn-outline-success btn-lg shadow-lg" download>Download CV</a>
                        </div>
                      </div>  
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
            <defs><path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" /></defs>
            <g class="parallax">
                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
        </svg>
      </div>
    </section>
    
    </>
  )
}

// https://github.com/rafikusdiarto/rafiescobar
// https://web.facebook.com/profile.php?id=100005698544779
// https://www.instagram.com/muhmmad.rafii/
// https://www.linkedin.com/in/muhammad-rafi-kusdiarto-265a09218/

export default about