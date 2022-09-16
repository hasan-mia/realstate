import React from 'react';
import menuIcon from '../assets/menu.png';
import '../styles/Header.css';

const Header = () => {
    return (
        <header>
            <input type="checkbox" id="checkbox-id" />
            <label for="checkbox-id" className='logo'>
                <img src={menuIcon} /></label>
            <nav class="menu">
                <ul>
                    <li><a href="#">Ana Səhifə</a></li>
                    <li><a href="#">Haqqımda</a></li>
                    <li><a href="#">Qalereya</a></li>
                    <li><a href="#">Əlaqə</a></li>
                </ul>
            </nav>

        </header>
    );
};

export default Header;