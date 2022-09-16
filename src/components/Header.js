import React from 'react';
import { BiHome } from 'react-icons/bi';
import menuIcon from '../assets/menu.png';
import '../styles/Header.css';

const Header = () => {
    return (
        <header>
            <input type="checkbox" id="checkbox-id" />
            <label for="checkbox-id" className='logo'>
                <img src={menuIcon} /></label>
            <nav class="menu flex between bg-white">
                <ul>
                 <BiHome></BiHome>
                </ul>

                <ul>
                    <li><a href="#">Rent</a></li>
                    <li><a href="#">Buy</a></li>
                    <li><a href="#">Sell</a></li>
                    <li><a href="#">Manage Property</a></li>
                    <li><a href="#">Resource</a></li>

                </ul>
                <ul>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Sign up</a></li>
                </ul>
            </nav>

        </header>
    );
};

export default Header;