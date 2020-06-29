import React, { Component } from "react";
import logo from '../../images/logo-future-eats.png'
import * as PFS from './FrontPageStyle'

class FrontPage extends Component {
    render() {
        return (
            <PFS.Main>
                <PFS.Test>
                    <PFS.CustomImage src={logo} alt="logo" />
                </PFS.Test>
            </PFS.Main>
        )
    }

}



export default FrontPage;