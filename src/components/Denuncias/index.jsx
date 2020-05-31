import React, {Fragment} from 'react';

import DenunciaBETA from '../DenunciaBETA'

const Denuncias = ({ complaints }) => {

    const validarObjeto = () => {
      if(Object.keys(complaints).length !== 0){
        return true;
      }
      return false;
    }

    return ( 
        <Fragment>
        {validarObjeto() && complaints.map(complaint => {
          return (
            <DenunciaBETA key={complaint.ID} complaint={complaint}/>
          )
        })}
        </Fragment>
     );
}
 
export default Denuncias;