import React from 'react';
import Header from '../Layout/Header';
import { Outlet } from "react-router-dom";
import Footer from '../Layout/Footer';
import './MainRoot.scss'; // CSS faylını daxil edin

const MainRoot = () => {
  return (
    <div className="main-root">
      <Header/>
      <div className="content">
        <Outlet/>
      </div>
      <Footer/>
    </div>
  );
}

export default MainRoot;
