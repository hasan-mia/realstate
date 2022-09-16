import React from 'react';
import product1 from '../assets/products/product-1.png'
import {AiFillHeart} from 'react-icons/ai'

const Product = () => {

    
    return (
        <section id="product">
        <div class="container bg-white">
            <div class="row">
                {/* <!-- end title --> */}
                <div class="col-3">
                    <article class="product">
                        <div class="thumbnail">
                            <img src={product1} alt="product"/>
                        </div>
                        <div class="product-price">
                            <p>5632/month</p>
                            <AiFillHeart/>
                        </div>
                        <div class="product-content">
                            <h3>Guide For 2020</h3>
                            <p>Reed Krakoffs.</p>
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