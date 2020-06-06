import React from 'react';
import './alertContainer.css';

const AlertState = ({state}) => {
    return (
       <div className={`ContainerAlert ${state}`}>
            <p>{state}</p>
       </div>
    )
}

export default AlertState;
