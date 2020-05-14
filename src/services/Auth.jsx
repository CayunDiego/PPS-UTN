// import React, { useState } from 'react';
// import 'firebase/auth';
// import { useFirebaseApp, useUser } from 'reactfire'

// const Auth = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const firebase = useFirebaseApp();
//     const user = useUser();

//     //Crea la cuenta
//     const submit = async () => {
//         await firebase.auth().createUserWithEmailAndPassword(email,password);
//     }

//     //Cierra Sesión
//     const logout = async () => {
//         await firebase.auth().signOut();
//     }

//     //Se Loguea
//     const login = async () => {
//         await firebase.auth().signInWithEmailAndPassword(email, password);
//     }
    
//     return ( 
//         <div>
//             {
//                 !user &&
//                 <div>
//                     <label htmlFor="email">Correo Electrónico</label>
//                     <input type="email" name="email" id="email" onChange={ ev => setEmail(ev.target.value)}/>
//                     <label htmlFor="password">Contraseña</label>
//                     <input type="password" name="password" id="password" onChange={ ev => setPassword(ev.target.value)}/>
//                     <button onClick={submit}>Crear cuenta</button>
//                     <button onClick={login}>Iniciar Sesión</button>
//                 </div>
//             }
//             {
//                 user && <button onClick={logout}>Cerrar Sesión</button>
//             }
            
//         </div>
//      );
// }
 
// export default Auth;