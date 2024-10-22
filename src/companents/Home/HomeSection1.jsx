import React from 'react';
import profilePhoto from '../../assets/Image.png';
import './HomeSec1.scss';

const HomeSection1 = () => {
  return (
    <div className='section1__all'>
      <div className="container all__sec1">
        <div className="leftside">
          <div className="leftside__content">
            <h1 className="intro-title">Hi, I'm <span className="highlight">Allahverdi</span></h1>
            <h2 className="intro-subtitle">A Passionate <span className="highlight">Web Developer</span></h2>
            <p className="description">
              I thrive on building engaging and user-friendly web experiences. 
              I love solving problems, exploring new technologies, and turning ideas into reality.
              Let's create something <span className="highlight">amazing</span> together!
            </p>
            <div className="buttons">
              <button className="btn resume-btn">View Resume</button>
            </div>
          </div>
        </div>
       <div>
       <div className="right__side">
          <img src={profilePhoto} alt="Allahverdi" className="profile-photo"/>
        </div>
        <div className="socialmedias">
          <div className='smedia'><i class="fa-brands fa-linkedin-in"></i></div>
          <div  className='smedia'><i class="fa-brands fa-instagram"></i></div>
          <div  className='smedia'><i class="fa-brands fa-github"></i></div>
          <div  className='smedia'><i class="fa-regular fa-envelope-open"></i></div>
          <div  className='smedia'><i class="fa-brands fa-facebook-f"></i></div>
        </div>
       </div>
      </div>
    </div>
  );
}

export default HomeSection1;
