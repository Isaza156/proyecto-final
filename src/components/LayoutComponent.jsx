import React from 'react';
import Footer from '../components/FooterComponent';

const Layout = (props) =>{
    return(
        <React.Fragment>
            <Footer />
            {props.children}
        </React.Fragment>
    )

}

export default Layout;