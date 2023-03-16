import React ,{useState, useEffect} from 'react'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Resume from './components/resume/Resume'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Loaders from './components/loaders/Loaders'
import AOS from 'aos'
import 'aos/dist/aos.css'
// import PortfolioDetail from './components/portfolioDetail/PortfolioDetail'
// import { Route, Routes } from "react-router-dom";


const App = () => {
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, [])

  useEffect(()=>{
    AOS.init({
      once:true,
      duration:1000,
      delay: 500
    })
  })
  return (
    <div className=''>
      {
        loading?
        <Loaders/>
        :
        <div>
          <Navbar/>
          <About/>
          <Skills/>
          <Resume/>
          <Portfolio/>
          <Contact/>
          <Footer/>
        </div>
      }

    </div>
  );
}

export default App