import React from 'react';
import Complaint from '../Complaint'


const PopupCard = ({sideDraweOpen, setsideDraweOpen}) => {
    let popupClasses = 'popupCard';
    if(sideDraweOpen.click){
        popupClasses = 'popupCard--open';
    }

    const handdlePopup = () => {
        setsideDraweOpen({ click: false,
                           complaint: null
                        })
      }

    return (
        <div className={popupClasses}>
            {sideDraweOpen.complaint && <Complaint complaint={sideDraweOpen.complaint}>
                                            <button className='popupCard__button' onClick={handdlePopup}>X</button>
                                        </Complaint>}
        </div>
    )
}

export default PopupCard
