import React, { Component } from 'react'


export class FooterComponent extends Component {
    render() {
        return (
            <React.Fragment>
              <footer className="footer py-2 color__primary fixed-bottom">
                <div className="container text-center">
                    <span className ="text-muted footer__spam">@2019 Haceme un cruce. All Rights Reserved.</span>
                </div>
            </footer>
               
            </React.Fragment>
        );
    }
}

export default FooterComponent;
