import {ArrowBack, ArrowLeftOutlined, ArrowRight} from '@material-ui/icons';
import React from 'react'
import './Banner.css'
import Navbar from './Navbar';
import SearchEmail from './SearchEmail';
function Banner() {
  return (
    <div className="banner">
      <Navbar />
      <img src="images/backgroundus.jpg" alt="" className="bannerBg" />
      <div className="bannerContent">
        <h1>Unlimited movies, TV shows and more.</h1>
        <h3>Watch anywhere. Cancel anytime.</h3>
        <SearchEmail/>
      </div>
    </div>
  );
}

export default Banner