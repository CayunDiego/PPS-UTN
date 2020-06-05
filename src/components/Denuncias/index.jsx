import React, {Fragment} from 'react';
import Complaint from '../Complaint';

const Denuncias = ({ complaints }) => {

    const validarObjeto = () => {
      return Object.keys(complaints).length !== 0 ? true : false;
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