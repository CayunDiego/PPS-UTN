import React, {useState} from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Section from '../../components/Section';
import BottomNav from '../../components/BottomNav';
import SideDrawer from '../../components/SideDrawer';
import Backdrop from '../../components/SideDrawer/Backdrop';
import { useUser } from 'reactfire';
import BottomNavVolver from '../../components/BottomNavVolver'

//Recibe por props lo que va en el header
//y por children en contedido
const Layout = ({header, children}) => {
    const user = useUser();
    const [sideDraweOpen, setsideDraweOpen] = useState(false);

    const drawerToggleClickHandler = () =>{
        setsideDraweOpen(!sideDraweOpen);
    }

    const buttonFooter = () => {
        return user ? <BottomNav/> : <BottomNavVolver/>
    }

    return (
        <div className='layout'>
            <Header click={drawerToggleClickHandler}>
                {header}
            </Header>
            {sideDraweOpen && (<Backdrop click={drawerToggleClickHandler}/>)}  
            <SideDrawer show={sideDraweOpen}/>
            <Section>
                {children}
            </Section>
            <Footer>
                {buttonFooter()}
            </Footer> 
        </div>
    )
}

export default Layout