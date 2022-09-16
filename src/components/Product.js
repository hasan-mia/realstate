import React from 'react';
import { FaRegHeart, FaShower } from 'react-icons/fa';
import {BiBed} from 'react-icons/bi';
import {GiLaurelCrown} from 'react-icons/gi';
import '../styles/Product.css'
import house1 from '../assets/house-1.jpeg';
import house2 from '../assets/house-2.jpg';
import house3 from '../assets/house-3.jpg';
import house4 from '../assets/house-4.jpg';
import house5 from '../assets/house-5.jpg';
import house6 from '../assets/house-6.jpg';
const Product = () => {


    return (
        <section className='py-10'>
            <div class="container">
                <div class="row">
                    {/* <!-- end title --> */}
                    <div class="col-3">
                        <article className='product bg-white border-r'>
                            <div class="thumbnail">
                                <img src={house1} alt="product" />
                            </div>
                            <div class="product-content">
                                <div class="product-price">
                                    <p><span className='price'>$5,632</span>/month</p>
                                    <FaRegHeart className='border-round'/>
                                </div>
                                <div class="product-details">
                                    <h3>Palm Harbour</h3>
                                    <p>2699 green valley, Highland Late ft</p>
                                </div>
                                <div class="product-object">
                                    <p className='flex'><BiBed className='font-md'/><span>Bed</span></p>
                                    <p className='flex'><FaShower className='font-md'/><span>Bedroom</span></p>
                                    <p className='flex'><GiLaurelCrown className='font-md'/><span>7x3 m<sup>2</sup></span></p>
                                </div>
                            </div>
                        </article>
                        <article className='product bg-white border-r'>
                            <div class="thumbnail">
                                <img src={house2} alt="product" />
                            </div>
                            <div class="product-content">
                                <div class="product-price">
                                    <p><span className='price'>$5,632</span>/month</p>
                                    <FaRegHeart className='border-round'/>
                                </div>
                                <div class="product-details">
                                    <h3>Palm Harbour</h3>
                                    <p>2699 green valley, Highland Late ft</p>
                                </div>
                                <div class="product-object">
                                    <p className='flex'><BiBed className='font-md'/><span>Bed</span></p>
                                    <p className='flex'><FaShower className='font-md'/><span>Bedroom</span></p>
                                    <p className='flex'><GiLaurelCrown className='font-md'/><span>6x5 m<sup>2</sup></span></p>
                                </div>
                            </div>
                        </article>
                        <article className='product bg-white border-r'>
                            <div class="thumbnail">
                                <img src={house3} alt="product" />
                            </div>
                            <div class="product-content">
                                <div class="product-price">
                                    <p><span className='price'>$5,632</span>/month</p>
                                    <FaRegHeart className='border-round'/>
                                </div>
                                <div class="product-details">
                                    <h3>Palm Harbour</h3>
                                    <p>2699 green valley, Highland Late ft</p>
                                </div>
                                <div class="product-object">
                                    <p className='flex'><BiBed className='font-md'/><span>Bed</span></p>
                                    <p className='flex'><FaShower className='font-md'/><span>Bedroom</span></p>
                                    <p className='flex'><GiLaurelCrown className='font-md'/><span>5x2 m<sup>2</sup></span></p>
                                </div>
                            </div>
                        </article>
                        <article className='product bg-white border-r'>
                            <div class="thumbnail">
                                <img src={house4} alt="product" />
                            </div>
                            <div class="product-content">
                                <div class="product-price">
                                    <p><span className='price'>$5,632</span>/month</p>
                                    <FaRegHeart className='border-round'/>
                                </div>
                                <div class="product-details">
                                    <h3>Palm Harbour</h3>
                                    <p>2699 green valley, Highland Late ft</p>
                                </div>
                                <div class="product-object">
                                    <p className='flex'><BiBed className='font-md'/><span>Bed</span></p>
                                    <p className='flex'><FaShower className='font-md'/><span>Bedroom</span></p>
                                    <p className='flex'><GiLaurelCrown className='font-md'/><span>5x2 m<sup>2</sup></span></p>
                                </div>
                            </div>
                        </article>
                        <article className='product bg-white border-r'>
                            <div class="thumbnail">
                                <img src={house5} alt="product" />
                            </div>
                            <div class="product-content">
                                <div class="product-price">
                                    <p><span className='price'>$5,632</span>/month</p>
                                    <FaRegHeart className='border-round'/>
                                </div>
                                <div class="product-details">
                                    <h3>Palm Harbour</h3>
                                    <p>2699 green valley, Highland Late ft</p>
                                </div>
                                <div class="product-object">
                                    <p className='flex'><BiBed className='font-md'/><span>Bed</span></p>
                                    <p className='flex'><FaShower className='font-md'/><span>Bedroom</span></p>
                                    <p className='flex'><GiLaurelCrown className='font-md'/><span>5x2 m<sup>2</sup></span></p>
                                </div>
                            </div>
                        </article>
                        <article className='product bg-white border-r'>
                            <div class="thumbnail">
                                <img src={house6} alt="product" />
                            </div>
                            <div class="product-content">
                                <div class="product-price">
                                    <p><span className='price'>$5,632</span>/month</p>
                                    <FaRegHeart className='border-round'/>
                                </div>
                                <div class="product-details">
                                    <h3>Palm Harbour</h3>
                                    <p>2699 green valley, Highland Late ft</p>
                                </div>
                                <div class="product-object">
                                    <p className='flex'><BiBed className='font-md'/><span>Bed</span></p>
                                    <p className='flex'><FaShower className='font-md'/><span>Bedroom</span></p>
                                    <p className='flex'><GiLaurelCrown className='font-md'/><span>5x2 m<sup>2</sup></span></p>
                                </div>
                            </div>
                        </article>
                    </div>
                    {/* <!-- end col --> */}
                </div>
            </div>
        </section>
    );
};

export default Product;