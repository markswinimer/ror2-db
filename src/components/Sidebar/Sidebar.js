import React from 'react';

import { StyledSidebar, Detail } from './Sidebar.styled.js';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentItem: null
        }
    }
    render() {
        let name = null;
        let description = null;
        let text = null;
        let type = null;
        if(this.props.currentItemInfo) {
            name = this.props.currentItemInfo.name;
            description = this.props.currentItemInfo.description;
            text = this.props.currentItemInfo.text;
            type = this.props.currentItemInfo.type;
        }

        return(
            <StyledSidebar>
                <h2>{name}</h2>
                <h4>{type}</h4>
                <p>{text}</p>
                <div dangerouslySetInnerHTML={{ __html: description }}></div>
            </StyledSidebar>
        )
    }
}

export default Sidebar;

