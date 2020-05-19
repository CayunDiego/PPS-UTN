import React from 'react';
import Navbar from '../Navbar';

const Header = ({children}) => {
    return (
        <div className='header'>
            <Navbar/>
            {children}
        </div>
    )
}

export default Header
