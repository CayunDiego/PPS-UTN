import React, { useEffect, useState} from 'react';
import typeWorkHttpClient from '../../services/Api/typeWork.httpClient';

const FormData = ({handleChangeState}) => {
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
            <select name="idType" id="idType" onChange={handleChangeState}>
                {createSelectItems()}
            </select>
            <input 
                type="text" 
                name="description" 
                id="description"
                placeholder='description'
                onChange={handleChangeState}/>
        </div>
    )
}

export default FormData
