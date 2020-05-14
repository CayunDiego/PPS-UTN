import React from 'react';
import Logout from '../services/Logout'

import User from '../components/User'
import Button from '@material-ui/core/Button'



    
const IndexConLogin = () => {
    
    return ( 
            <div>
                    <div>
                        <h1>SOY EL HOME U. LOGUEADO</h1>
                        <User/>
                        <Logout/>
                        <Button variant="contained" color="default" href="/edituser/">
                          EDITAR Foto
                        </Button>
                        
                    </div>
            </div>
     );
}
 
export default IndexConLogin;