import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt=" " />
            <div class="nav-links">
                <a href="">Inventory</a>
                <a href="">Order</a>
                <a href="">Cart</a>
                <a href="">Review</a>
            </div>
        </nav>
    );
};

export default Header;