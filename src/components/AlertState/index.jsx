import React from 'react';

const AlertState = ({state}) => {
    return (
       <div className={`ContainerAlert ContainerAlert--${state}`}>
            <p>{state}</p>
       </div>
    )
}

export default AlertState;
