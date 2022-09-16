import React from 'react';
import { BiHome, BiMailSend } from 'react-icons/bi';
import menuIcon from '../assets/menu.png';
import '../styles/Header.css';

const Header = () => {
    return (
        <header className='mx-20'>
            <input type="checkbox" id="checkbox-id" />
            <label for="checkbox-id" className='logo'>
                <div className="flex between reverse-r ml-20">
                <div>
                    <img src={menuIcon} />
                </div>
                <div className='flex font-lg font-bold hide-lg'>
                 <BiMailSend className='color-primary font-xl'/> <span>Estatery</span>
                </div>
                </div>
            </label>
            <nav className="menu flex between bg-white">
                <div className='flex font-lg font-bold hide-m'>
                 <BiMailSend className='color-primary font-xl'/> <span>Estatery</span>
                </div>

                <ul className='main'>
                    <li><a href="#">Rent</a></li>
                    <li><a href="#">Buy</a></li>
                    <li><a href="#">Sell</a></li>
                    <li><a href="#">Manage Property</a></li>
                    <li><a href="#">Resource</a></li>

                </ul>
                <ul className='user'>
                    <li className='btn btn-primary'><a href="#" className='color-white font-bold'>Login</a></li>
                    <li className='btn btn-primary'><a href="#" className='color-white font-bold'>Sign up</a></li>
                </ul>
            </nav>

        </header>
    );
};

export default Header;