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
            <h2 className="intro-subtitle">A Web Developer Who  <span className="highlight">Keeps Growing</span></h2>
            <p className="description">
              <strong>    I believe that every challenge is an opportunity.  </strong> <br />
              I don’t just write code I build experiences, <span className="highlight">solve problems</span>, and bring ideas to life.
              I push boundaries, embrace new technologies, and never settle for <span className="highlight">good enough.</span>
              <br /><br />
              The <span className="highlight">digital world</span> is evolving, and so am I. Let’s create something extraordinary together! 🚀

            </p>
            <div className="buttons">
              <button className="btn resume-btn">
                <a
                  href="https://drive.google.com/uc?export=download&id=1NUx-d1IZPnZNknB_bn0NfivlDJG-2jji"
                  download
                  style={{ fontSize: '18px', textDecoration: 'underline', color: 'white', fontWeight: "bold" }}
                >
                  Download CV
                </a>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="right__side">
            {/* Dönen border için ayrı bir div */}
            <div className="rotating-border"></div>

            {/* Sabit kalacak profil resmi */}
            <div className="profile-container">
              <img src={profilePhoto} alt="Allahverdi" className="profile-photo" />
            </div>
          </div>


          {/* <div className="socialmedias">
            <div className='smedia'><a href="https://www.linkedin.com/in/allahverdi-agamaliyev/"><i className="fa-brands fa-linkedin-in"></i></a></div>
            <div className='smedia'><a href="https://www.instagram.com/agamaliyevh_/"><i className="fa-brands fa-instagram"></i></a></div>
            <div className='smedia'><a href="https://github.com/AAllahverdi2"><i className="fa-brands fa-github"></i></a></div>
            <div className='smedia'><a href="https://mail.google.com/mail/u/0/#inbox"><i className="fa-regular fa-envelope-open"></i></a></div>
            <div className='smedia'><a href="https://www.facebook.com/allahverdi.agamaliyev.3"><i className="fa-brands fa-facebook-f"></i></a></div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default HomeSection1;
