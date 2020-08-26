import React from 'react';

import Sidebar from '../Sidebar/Sidebar';
import Window from '../Window/Window';

import { StyledMain } from './Main.styled.js';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentItemInfo: null
        }
        this.getCurrentInfo = this.getCurrentInfo.bind(this);
    }
    getCurrentInfo(e){
        console.log(e.target.id.item);
        this.setState({ currentItem: e })
    }
    render() {
        return(
            <StyledMain>
                <Sidebar
                    currentItemInfo={this.state.currentItemInfo}/>
                <Window
                    handleHover={this.getCurrentInfo}
                />
            </StyledMain>
        )
    }
}

export default Main;

