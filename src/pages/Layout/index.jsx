import React from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Section from '../../components/Section';
import BottomNav from '../../components/BottomNav';

//Recibe por props lo que va en el header
//y por children en contedido
const Layout = ({header, children}) => {
    return (
        <div className='layout'>
            <Header>
                {header}
            </Header>
            <Section>
                {children}
            </Section>
            <Footer>
                <BottomNav/>
            </Footer> 
        </div>
    )
}

export default Layout