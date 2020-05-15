import React from 'react';
import Logout from '../services/Logout'

import User from '../components/User'
import Button from '@material-ui/core/Button'


//esto se puede borrar
import { useUser } from 'reactfire';
    
const IndexWithLogin = () => {
    //se puede borrar
    const user = useUser();
    return ( 
            <div>
              {console.log(user)}
                    <div>
                        <h1>SOY EL HOME U. LOGUEADO</h1>
                        <User/>
                        <Logout/>
                        <Button variant="contained" color="default" href="/profile/">
                          VER PERFIL
                        </Button>
                        
                    </div>
            </div>
     );
}
 
export default IndexWithLogin;