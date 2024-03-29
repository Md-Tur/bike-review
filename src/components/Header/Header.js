import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <div className='header-style'>
            <nav>
                <CustomLink to="/">HOME</CustomLink>
                <CustomLink to="/reviews">REVIEWS</CustomLink>
                <CustomLink to="/dashboard">DASHBOARD</CustomLink>
                <CustomLink to="/blogs">BLOGS</CustomLink>
                <CustomLink to="/about">ABOUT</CustomLink>
            </nav>
        </div>
    );
};

export default Header;