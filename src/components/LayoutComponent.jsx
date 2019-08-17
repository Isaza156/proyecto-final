import React from 'react';
import Footer from '../components/FooterComponent';
import Navbar from '../components/NavbarComponent';

const Layout = (props) =>{
    return(
        <React.Fragment>
            <Navbar/>
            {props.children}
            <Footer />
        </React.Fragment>
    )

}

export default Layout;