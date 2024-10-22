import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
// Bootstrap JS-i import edirik
import { Offcanvas } from 'bootstrap';
import './Header.scss';

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
            bsOffcanvas.hide(); // Offcanvas-ı bağlayır
        }
    };

    // Səhifə dəyişdikdə offcanvas və backdrop-un silinməsi
    useEffect(() => {
        setIsActive(false);
        closeOffcanvas(); // Offcanvas-ı tam bağlayır
    }, [location.pathname]);

    // Hər bir linkin aktiv olub-olmamasını yoxlamaq üçün funksiya
    const isActiveLink = (path) => location.pathname === path;

    return (
        <div className="header">
            <h1 className="title">Allahverdi</h1>
            <nav className="nav">
                <Link 
                    to="/" 
                    className={`nav-link ${isActiveLink('/') ? 'active-link' : ''}`}
                >
                    Home
                </Link>
                <Link 
                    to="/about" 
                    className={`nav-link ${isActiveLink('/about') ? 'active-link' : ''}`}
                >
                    About
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
                        <button 
                            type="button" 
                            className="btn-close text-reset" 
                            data-bs-dismiss="offcanvas" 
                            aria-label="Close"
                            onClick={closeOffcanvas}
                        ></button>
                    </div>
                    <div className="offcanvas-body offlinks">
                        <a href="#" onClick={() => handleLinkClick('/')}>Home</a><hr />
                        <a href="#" onClick={() => handleLinkClick('/about')}>About</a><hr />
                        <a href="#" onClick={() => handleLinkClick('/contact')}>Contact</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
