import React from 'react';

import '../css/header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='headerMain'>
                <h1>Mount Pleasant</h1>
                <h3>Monday 29 August</h3>
            </div>
            <div className='headerInput'>
                <input type='text' placeholder='Enter zipcode'/>
                <button>Get Weather</button>
            </div>
        </div>
    );
};

export default Header;