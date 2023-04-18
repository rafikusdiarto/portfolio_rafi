import React from 'react'
import './navbar.css'
import { useState, useEffect } from 'react';

const Nav = () => {
const [navbar,setNavbar] = useState(false);

const changeBackground=() =>{
  if(window.scrollY > 50){
    setNavbar(true)
  }
  else{
    setNavbar(false)
  }
};

useEffect(() => {
  changeBackground()
  window.addEventListener("scroll", changeBackground)
})

  return (
    <>
    <nav class={ navbar ? "navbar active sticky-top navbar-expand-lg navbar-light shadow-lg":'navbar'}>
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><b>Rafi.</b></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" style={{textDecoration:'none'}} aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" style={{textDecoration:'none'}} href="/portfolio-detail">Portfolio</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Nav