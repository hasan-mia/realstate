import React from 'react';

const Select = () => {
    return (
        <section className='py-10'>
            <div className="container">
                <div className="row between">
                    <div>
                        <h1>Search Properties to rent</h1>
                    </div>
                    <div>
                        <select className="form-control">
                            <option selected>Search with Search Bar</option>
                        </select>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Select;