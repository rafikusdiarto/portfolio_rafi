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
      <nav class={navbar ? "navbar active sticky-top navbar-expand-lg navbar-light shadow-lg" : 'navbar'}>
        <div class="container">
          <a class="navbar-brand" href="#"><b>Rafi.</b></a>
          <ul class="navbar-nav">
            <li>
              <a href="/" style={{textDecoration:'none'}}>Home</a>
              <a href="/portfolio-detail" style={{textDecoration:'none'}}>Portfolio</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav