import React from 'react';
import '../styles/Search.css';

const Search = () => {
    return (
        <section className='py-10'>
            <div className="container">
                <div className="row">
                    <div className="col-5 bg-white">
                        <div className="form">
                            <label htmlFor="location" className='pl-10 color-soft'>Location</label>
                            <input type="text" placeholder='NewYork USA' name='location'/>
                        </div>
                        <div className="form">
                            <label htmlFor="location" className='pl-10 color-soft'>When</label>
                            <input type="date" placeholder='When' name='location'/>
                        </div>
                        <div className="form">
                            <label htmlFor="location" className='pl-10 color-soft'>Price</label>
                            <input type="price" placeholder='$500-$800' />
                        </div>
                        <div className="form">
                            <label htmlFor="location" className='pl-10 color-soft'>Property Type</label>
                            <select className="form-control">
                                <option selected>House</option>
                                <option>House2</option>
                                <option>House3</option>
                                <option>House4</option>
                                <option>House5</option>
                            </select>
                        </div>
                        <div className="form">
                            <input type="button" className='btn btn-primary' placeholder='NewYork USA' value='Search'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Search;