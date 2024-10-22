import React from 'react'
import profilePhoto from '../../assets/Allahverdilogo.png';
import './HomeSec1.scss'

const HomeSection1 = () => {
  return (
    <div>
        
        <main className="main-content">
      <div className="profile-container">
        <img src={profilePhoto} alt="Profile" className="profile-photo" />
        <h2>Welcome to My Portfolio</h2>
        <p>I'm a passionate developer focused on building awesome projects.</p>
        <div className="buttons">
          <button className="btn">Contact Me</button>
          <button className="btn">See Projects</button>
        </div>
      </div>
    </main>
    </div>
  )
}

export default HomeSection1
