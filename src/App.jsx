import React ,{useState, useEffect} from 'react'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Resume from './components/resume/Resume'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Loaders from './components/loaders/Loaders'
import { Routes } from 'react-router-dom'
// import PortfolioDetail from './components/portfolioDetail/PortfolioDetail'
// import { Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <>
      {/* <Loaders/> */}
      <About/>
      <Skills/>
      <Resume/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App