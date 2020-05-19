import React from 'react';
import '../Spinner/spinner.css';



const Spinner = () => {
    return ( 
        <div className="spinner">
            <div className="cube1"></div>
            <div className="cube2"></div>
            <img src='/assets/logo-muni-verde.png' alt="logo" className='logoMuni'/>
        </div>
     );
}
 
export default Spinner;
