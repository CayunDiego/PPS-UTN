import React from 'react';
import Navbar from '../Navbar';

const Header = ({children, click}) => {
    return (
        <header>
            <Navbar click={click}/>
            {children}
        </header>
    )
}

export default Header
