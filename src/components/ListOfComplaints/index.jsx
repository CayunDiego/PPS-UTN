import React, {Fragment, useState } from 'react';
import Complaint from '../Complaint';
import SwitchOrdenar from '../SwitchOrdenar';

const ListOfComplaints = ({ complaints }) => {
    const [checked, setChecked] = useState(false);
    
    const ordenarVote = () => {
      complaints.sort(function (a, b) {
        return b.VOTE - a.VOTE;
      });
    }

    const ordenarId = () => {
      complaints.sort(function (a, b) {
        return b.ID - a.ID;
      });
    }

    const validarObjeto = () => {
      return Object.keys(complaints).length !== 0 ? true : false;
    }

    return ( 
        <Fragment>
          {checked === true ? ordenarVote() : ordenarId()}
          <SwitchOrdenar checked={checked} setChecked={setChecked}/>
        {validarObjeto() && complaints.map(complaint => {
          return (
            <Complaint key={complaint.ID} complaint={complaint}/>
          )
        })}
        </Fragment>
     );
}
 
export default ListOfComplaints;