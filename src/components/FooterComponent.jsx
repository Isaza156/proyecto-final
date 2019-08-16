import React from 'react'


export class Footer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-2 color__primary fixed-bottom">
                    <div className="container text-center">
                        <span className="text-muted footer__spam">@2019 Haceme un cruce. All Rights Reserved.</span>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default Footer;
