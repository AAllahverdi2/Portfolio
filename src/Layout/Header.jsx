import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Offcanvas } from 'bootstrap';
import './Header.scss';
// import myLogo from '../assets/myLogo.png'
import myLogo from '../../src/assets/mylogo.png'
const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLinkClick = (path) => {
        closeOffcanvas();
        navigate(path);
    };

    const toggleOffcanvas = () => {
        setIsActive(!isActive);
    };

    const closeOffcanvas = () => {
        const offcanvasElement = document.getElementById('offcanvasRight');
        if (offcanvasElement) {
            const bsOffcanvas = Offcanvas.getInstance(offcanvasElement) || new Offcanvas(offcanvasElement);
            bsOffcanvas.hide();
        }
    };

    useEffect(() => {
        setIsActive(false);
        closeOffcanvas();
    }, [location.pathname]);

    const isActiveLink = (path) => location.pathname === path;

    return (
        <div className="header">
            <h1 className="title"> <img style={{maxWidth:"50px", maxHeight:"50px", borderRadius:"50%", marginRight:"10px",objectFit:"cover",border:"1px solid white" }} src={myLogo} alt="" />A.Allahverdi</h1>
            <nav className="nav">
                <Link
                    to="/"
                    className={`nav-link ${isActiveLink('/') ? 'active-link' : ''}`}
                >
                    Home
                </Link>

                <Link
                    to="/education"
                    className={`nav-link ${isActiveLink('/about') ? 'active-link' : ''}`}
                >
                    Education
                </Link>
                <Link
                    to="/skills"
                    className={`nav-link ${isActiveLink('/skills') ? 'active-link' : ''}`}
                >
                    Skills
                </Link>

                <Link
                    to="/experience"
                    className={`nav-link ${isActiveLink('/experience') ? 'active-link' : ''}`}
                >
                    Experience
                </Link>


                <Link
                    to="/portfolio"
                    className={`nav-link ${isActiveLink('/portfolio') ? 'active-link' : ''}`}
                >
                    Portfolio
                </Link>
                <Link
                    to="/contact"
                    className={`nav-link ${isActiveLink('/contact') ? 'active-link' : ''}`}
                >
                    Contact
                </Link>

            </nav>
            <div className="offcanvasasa">
                <button
                    className={`btn btn-primary offbtn ${isActive ? 'active' : ''}`}
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                    onClick={toggleOffcanvas}
                >
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </button>

                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">

                    </div>
                    <div className="offcanvas-body offlinks">
                        <a href="/" onClick={() => handleLinkClick('/')}>Home</a><hr />
                        {/* <a href="#" onClick={() => handleLinkClick('/skills')}>About</a><hr /> */}

                        <Link to='/skills'>Skills</Link> <hr />
                        <Link to='/education'>Education</Link> <hr />
                        <Link to='/experience'>Experience</Link> <hr />
                        <Link to='/portfolio'>Portfolio</Link> <hr />
                        <Link to='/contact'>Contact</Link> <hr />
                        {/* <a href="#" onClick={() => handleLinkClick('/contact')}>Contact</a> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
