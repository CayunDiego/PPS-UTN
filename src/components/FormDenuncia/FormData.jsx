import React, { useEffect, useState} from 'react';
import typeWorkHttpClient from '../../services/Api/typeWork.httpClient';

const FormData = ({handleChangeState, setValidate}) => {
    const [tipoObras, setTipoObras] = useState({});
    const [state1, setstate1] = useState(false)
    const [state2, setstate2] = useState(false)


    const getTipoObras =  async () => {
        const res = await typeWorkHttpClient.getAll();
        setTipoObras(res.data)
    }

    useEffect(() => {
        getTipoObras()
    },[]);

    const createSelectItems = () =>  {
        let items = []; 
        items.push(<option key={0} value={0}>Elige un Tipo de Obra</option>);       
        Object.keys(tipoObras).length !== 0 &&
            tipoObras.map( tipo => 
                items.push(<option key={tipo.ID_TYPE} value={tipo.ID_TYPE}>{tipo.TYPE}</option>))
        return items;
    }  

    const handleSelect = e => {
        handleChangeState(e);
        if(parseInt(e.target.value) !== 0){
            setstate1(true);
        } else {
            setstate1(false);
        }
    }

    const handleDescription = e => {
        handleChangeState(e)
        if(e.target.value !== ''){
            setstate2(true);
        } else {
            setstate2(false);
        }
    }

    const validate = () => {
        if(state1 && state2){
            setValidate(true);
        } else {
            setValidate(false);
        }
    }

    return (
        <div className='formData'>
            <select name="idType" id="idType" onChange={handleSelect}>
                {createSelectItems()}
            </select>
            <input 
                type="text" 
                name="description" 
                id="description"
                placeholder='description'
                onChange={handleDescription}/>
                {validate()}
        </div>
    )
}

export default FormData
