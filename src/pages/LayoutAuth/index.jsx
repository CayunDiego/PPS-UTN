import React from 'react'
import Footer from '../../components/Footer';
import SectionAuth from '../../components/SectionAuth';
import Copyright from '../../components/Copyright';

//Recibe por props lo que va en el header
//y por children en contedido
const LayoutAuth = ({children}) => {
    return (
        <div className='layout2'>
            <SectionAuth>
                {children}
            </SectionAuth>
            <Footer>
                <Copyright/>
            </Footer>
        </div>
    )
}

export default LayoutAuth