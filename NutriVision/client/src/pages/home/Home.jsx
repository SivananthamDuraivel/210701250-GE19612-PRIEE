import React from 'react';
import './Home.css';
import './style.css';   
import Footer from '../../components/footer/Footer.jsx';
import img1 from './images/1.jpg';
import v from './images/V1.png';
import n from './images/g-apple.png';
import analyzer from './images/Analyzer.png';
import Dietplan from './images/Dietplan.png';
import Tracker from './images/Tracker.png';
import Diet from './images/Diet.png';
import { GoNorthStar } from "react-icons/go";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  function getStarted() {
    navigate('/signup');
  }

  return (
    <div className='entirepage'>
      <nav id="navbar">
        <div className="logo">
          <div className='n'><img  src={n} height={60} width={60} alt="N logo" /></div>
          <div className="utri"><p>utri</p></div>
          <div className='v'><img src={v} height={75} width={75} alt="V logo" /></div>
          <div className="ision"><p>ision</p></div>
        </div>
        <div className='urls'>
          <ul className="nav-links">
            <li><a href="#details">About</a></li>
            <li><a href="/signup">SignUp</a></li>
            <li><a href="/signin">SignIn</a></li>
          </ul>
        </div>
      </nav>
      <br />
      <div className="outer">
        <div className="left">
          <img src={img1} alt="profile picture" className="responsive-img" />
        </div>
        <div className="right">
          <div className='content-home'>
            <h1 className="nv">NutriVision</h1><br />
            <h2 className="middle-text">AI Powered Nutrition Analyser.</h2><br /><br />
            <button onClick={getStarted} className='start-button'><strong>Get Start..!</strong></button>
          </div>
        </div>
      </div>
      <center><h2>Know more about NutriVision</h2></center> <br /><br /><br /><br />
      <div className="about-container">
        <br /><br /><br />
        <center><h2 className='title-about' id='details'>1. Nutrition Analysis</h2></center>
        <br /><br />
        <div className='about'>
          <div className='about-right' style={{padding:'2rem'}}>
            
              <h4>"Discover the nutritional content of any food by simply entering its name! Uncover the secrets hidden in your favorite dishes."</h4><br />
              <ul className='analysis-access'>
                <li className='acess-1'><GoNorthStar color='orange' /> Create account..</li><br />
                <li className='acess-1'><GoNorthStar color='orange' /> Go to nutrition analysis </li><br />
                <li className='acess-1'><GoNorthStar color='orange' /> Then enter the food name.</li><br />
              </ul>
            
          </div>
          <div className='about-left'>
            <img src={analyzer} alt="Analyzer" className='about-image' />
          </div>
        </div>
        <br /><br /><br /><br /><br /><br /><br />
        <center><h2 className='title-about' id='details'>2. Diet Plan</h2></center>
        <br /><br /><br />
        <div className='about'>
          <div className='about-right'>
            <img src={Dietplan} alt="Diet Plan" className='about-image' />
          </div>
          <div className='about-left'>
            <h3 >"Tailor your path to wellness with our personalized diet planner! Craft a roadmap to your health goals, one meal at a time."</h3>
          </div>
        </div>
        <br /><br />
        <center><h2 className='title-about' id='details'>3. Calorie Tracker</h2></center>
        <br /><br />
        <div className='about'>
          <div className='about-right'>
            <h3 className='about-content3'>"Track your journey to better health with our seamless diet tracker. Effortlessly monitor your nutrition and stay on course to your wellness goals."</h3>
          </div>
          <div className='about-left'>
            <img src={Tracker} alt="Calorie Tracker" className='about-image' id='track' />
          </div>
        </div>
        <br /><br />
        <center><h2 className='title-about' id='details'>4. Diets</h2></center>
        <br /><br />
        <div className='about'>
          <div className='about-right'>
            <img src={Diet} alt="Diets" className='about-image' />
          </div>
          <div className='about-left'>
            <h3>"Tailor your path to wellness with our personalized diet planner! Craft a roadmap to your health goals, one meal at a time."</h3>
            <br /><br />
            <ul>
              <li><GoNorthStar color='orange' /> You can read all the articles</li><br />
              <li><GoNorthStar color='orange' /> Apply that knowledge in your meal and workout session.</li>
            </ul>
          </div>
        </div>
      </div><br /><br /><br /><br /><br />
      <Footer />
    </div>
  );
};

export default Home;
