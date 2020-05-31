import React, { useEffect, useState} from 'react';
import typeWorkHttpClient from '../../services/Api/typeWork.httpClient';

const FormData = ({handleChangeCausa, handleSelected}) => {
    const [tipoObras, setTipoObras] = useState({});


    const getTipoObras =  async () => {
        const res = await typeWorkHttpClient.getAll();
        setTipoObras(res.data)
    }

    useEffect(() => {
        getTipoObras()
    },[]);

    const createSelectItems = () =>  {
        let items = [];         
        Object.keys(tipoObras).length !== 0 &&
            tipoObras.map( tipo => 
                items.push(<option key={tipo.ID_TYPE} value={tipo.ID_TYPE}>{tipo.TYPE}</option>))
        return items;
    }  

    return (
        <div className='formData'>
            <select name="" id="" onChange={handleSelected}>
                {createSelectItems()}
            </select>
            <input 
                type="text" 
                name="causa" 
                id="causa"
                placeholder='Causa'
                onChange={handleChangeCausa}/>
        </div>
    )
}

export default FormData
