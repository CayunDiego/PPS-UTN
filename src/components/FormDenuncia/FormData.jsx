import React, { useEffect, useState} from 'react';
import {getObrasApi} from '../../services/Api/tipoObraCordoba'

const FormData = ({handleChangeCausa, handleSelected}) => {
    const [tipoObras, setTipoObras] = useState({});


    const getTipoObras =  async () => {
        getObrasApi().then(res => {
            setTipoObras(res.results)
        })
    }


    useEffect(() => {
        getTipoObras()
    },[]);


    const createSelectItems = () =>  {
        let items = [];         
        Object.keys(tipoObras).length !== 0 &&
            tipoObras.map( tipo => 
                items.push(<option key={tipo.id} value={tipo.id}>{tipo.nombre}</option>))
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
