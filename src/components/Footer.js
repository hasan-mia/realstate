import React from 'react';
import { BiMailSend } from 'react-icons/bi';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import '../styles/Footer.css';
const Footer = () => {
    return (
        <footer className='pt-10 footer'>
            <div className="container">
                <div className="row between py-10">
                        <div className="footer-logo">
                            <div className='flex font-lg font-bold py-10'>
                                <BiMailSend className='color-white font-xl' /> <span>Estatery</span>
                            </div>
                            <ul className="flex">
                                <li>
                                    <a href="#" className='color-white'> <FaFacebook></FaFacebook> </a>
                                </li>
                                <li>
                                    <a href="#" className='color-white'> <FaTwitter></FaTwitter> </a>
                                </li>
                                <li>
                                    <a href="#" className='color-white'> <FaWhatsapp></FaWhatsapp> </a>
                                </li>
                                <li>
                                    <a href="#" className='color-white'> <FaInstagram></FaInstagram></a>
                                </li>
                            </ul>
                        </div>
                        <div className="contact">
                            <p>Emal: contact@estatery.com</p>
                            <p>Phone: +109383972</p>
                            <p>Web: www.estatery.com</p>
                        </div>
                        <div className="flex">
                            <li className='px-5'> <a href="#" className='color-white'>About us</a> </li>
                            <li className='px-5'> <a href="#" className='color-white'>Refund policy</a> </li>
                            <li className='px-5'> <a href="#" className='color-white'>Terms and Conditions</a> </li>
                            <li className='px-5'> <a href="#" className='color-white'>Privacy Policy</a> </li>
                        </div>
                    </div>
                </div>

            <div className="copywright">
                <p>&copy; 2020-2022 All girght reserved by Estatery.com</p>
            </div>
        </footer>

    );
};

export default Footer;