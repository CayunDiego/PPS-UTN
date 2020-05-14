import React from 'react';
import { useUser } from 'reactfire'

const User = () => {

    const user = useUser();
    return ( 
        <div>
            {
                user && 
                    <div>
                        <h1>Wellcome {user.displayName}</h1>
                        <img src={user.photoURL} alt="fotoPerfil"/>
                    </div>
                
            }
            {
                !user && <p>NO TENGO INFO</p>
            }
            
        </div>
     );
}
 
export default User;