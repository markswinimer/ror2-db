import React from 'react';

import { StyledSidebar } from './Sidebar.styled.js';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentItem: null
        }
    }
    render() {
        console.log(this.props)
        // const { itemName, itemDescription } = this.props.currentItemInfo;
        return(
            <StyledSidebar>
                {/* name: {itemName} */}
                {/* description: {itemDescription} */}
            </StyledSidebar>
        )
    }
}

export default Sidebar;

