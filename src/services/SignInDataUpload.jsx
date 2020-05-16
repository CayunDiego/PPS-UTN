import React, { useState} from 'react';
import {  useUser, useDatabase } from 'reactfire';
import  { Redirect } from 'react-router-dom';

const SignInDataUpload = () => {
    const [redirect, setRedirect] = useState(false)
    const user = useUser();
    const db = useDatabase();


    const click = async e => {
        e.preventDefault();
        const [nombre, apellido, documento] = e.target.elements;
        const nombreValue = nombre.value;
        const apellidoValue = apellido.value;
        const documentoValue = documento.value;
        await db.ref('/users').push(
                {   id: user.uid,
                    nombre: nombreValue,
                    apellido: apellidoValue,
                    documento: documentoValue
                }
            );
        setRedirect(true);
    }
    
    return ( 
        <div>
            {!redirect &&
                <form onSubmit={click}>
                    <div>
                        <input name="nombre"
                                type="text"
                        
                            />
                    </div>
                    <div>
                        <input name="apellido"
                            type="text"
                        
                        />
                    </div>
                    <div>
                        <input name="documento"
                            type="text"
                        
                        />
                    </div>
                    <button >Cargar Datos</button>
                </form>
            }
            {
                redirect && <Redirect to='/'/>
            }
        </div>
        
     );
}
 
export default SignInDataUpload;