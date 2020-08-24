import React from 'react';

import { StyledNavbar } from './Navbar.styled.js';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <StyledNavbar>
                Navbar Page
            </StyledNavbar>
        )
    }
}

export default Navbar;

