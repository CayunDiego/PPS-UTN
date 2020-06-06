import React, { useState } from 'react';

const Context = React.createContext({});

export const ComplaintsContextProvider = ({children}) => {
    const [complaints, setComplaints] = useState([])
    return <Context.Provider value={{complaints, setComplaints}}>
                {children}
           </Context.Provider>
}

export default Context; 