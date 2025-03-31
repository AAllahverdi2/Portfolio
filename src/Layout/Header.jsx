import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Offcanvas } from 'bootstrap';
import './Header.scss';
import myLogo from '../../src/assets/mylogo.png';
import { LanguageContext } from '../context/LanguageContext';

const Header = () => {
    const { language, setLanguage } = useContext(LanguageContext);
    const [isActive, setIsActive] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const translations = {
        az: {
            home: "Ana Səhifə",
            education: "Təhsil",
            skills: "Bacarıqlar",
            experience: "Təcrübə",
            portfolio: "Portfolio",
            contact: "Əlaqə",
            langSelect: "Dil Seçimi",
        },
        ru: {
            home: "Главная",
            education: "Образование",
            skills: "Навыки",
            experience: "Опыт",
            portfolio: "Портфолио",
            contact: "Контакты",
            langSelect: "Выбор языка",
        },
        en: {
            home: "Home",
            education: "Education",
            skills: "Skills",
            experience: "Experience",
            portfolio: "Portfolio",
            contact: "Contact",
            langSelect: "Language",
        },
    };

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
            <h1 className="title">
                <img
                    style={{ maxWidth: "50px", maxHeight: "50px", borderRadius: "50%", marginRight: "10px", objectFit: "cover", border: "1px solid white" }}
                    src={myLogo}
                    alt="Logo"
                />
                A.Allahverdi
            </h1>

            <nav className="nav">
                <Link to="/" className={`nav-link ${isActiveLink('/') ? 'active-link' : ''}`}>
                    {translations[language].home}
                </Link>
                <Link to="/education" className={`nav-link ${isActiveLink('/education') ? 'active-link' : ''}`}>
                    {translations[language].education}
                </Link>
                <Link to="/skills" className={`nav-link ${isActiveLink('/skills') ? 'active-link' : ''}`}>
                    {translations[language].skills}
                </Link>
                <Link to="/experience" className={`nav-link ${isActiveLink('/experience') ? 'active-link' : ''}`}>
                    {translations[language].experience}
                </Link>
                <Link to="/portfolio" className={`nav-link ${isActiveLink('/portfolio') ? 'active-link' : ''}`}>
                    {translations[language].portfolio}
                </Link>
                <Link to="/contact" className={`nav-link ${isActiveLink('/contact') ? 'active-link' : ''}`}>
                    {translations[language].contact}
                </Link>
                <select value={language} onChange={(e) => setLanguage(e.target.value)} className="language-select languages">
                <option value="az"> AZ</option>
                <option value="ru"> RU</option>
                <option value="en"> EN</option>
            </select>
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
                    <div className="offcanvas-header"></div>
                    <div className="offcanvas-body offlinks">
                        <Link to='/' onClick={() => handleLinkClick('/')}>{translations[language].home}</Link> <hr />
                        <Link to='/skills'>{translations[language].skills}</Link> <hr />
                        <Link to='/education'>{translations[language].education}</Link> <hr />
                        <Link to='/experience'>{translations[language].experience}</Link> <hr />
                        <Link to='/portfolio'>{translations[language].portfolio}</Link> <hr />
                        <Link to='/contact'>{translations[language].contact}</Link> <hr />
                        <select value={language} onChange={(e) => setLanguage(e.target.value)} className="language-select languagess">
                            <option value="az"> AZ</option>
                            <option value="ru"> RU</option>
                            <option value="en"> EN</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
