import React, {Fragment} from 'react';
import Complaint from '../Complaint';

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
            <Complaint key={complaint.ID} complaint={complaint}/>
          )
        })}
        </Fragment>
     );
}
 
export default Denuncias;