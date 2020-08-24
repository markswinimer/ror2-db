import React from 'react';

import { StyledSidebar } from './Sidebar.styled.js';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <StyledSidebar>
                Sidebar Page
            </StyledSidebar>
        )
    }
}

export default Sidebar;

