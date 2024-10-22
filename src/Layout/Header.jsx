import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <h1 className="title">Allahverdi Agamaliyevh </h1>
            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
            <div className="offcanvasasa">
                <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>

                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div class="offcanvas-header">
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body offlinks">
                        <Link to="/">Home</Link><hr />
                        <Link to="/about">About</Link> <hr />
                        <Link to="/contact">Contact</Link> <head></head>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
