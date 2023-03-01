import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route,Switch,} from "react-router-dom";
import App from './App';
import PortfolioDetail from './components/portfolioDetail/PortfolioDetail';
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/portfolioDetail" element={<PortfolioDetail />} />
    </Routes>
  </BrowserRouter>
  
);

