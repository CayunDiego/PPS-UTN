import React from 'react';

const Spinner = () => {
    return ( 
        <div className="spinner">
            <div className="spinner__cube1"></div>
            <div className="spinner__cube2"></div>
            <img src='/assets/logo-muni-verde.png' alt="logo" className='spinner__logoMuni'/>
        </div>
     );
}
 
export default Spinner;
