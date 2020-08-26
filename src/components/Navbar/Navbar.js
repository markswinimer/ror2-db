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
                Risk of Rain 2 DB
            </StyledNavbar>
        )
    }
}

export default Navbar;

