import React from 'react';

import Sidebar from '../Sidebar/Sidebar';
import Window from '../Window/Window';

import { StyledMain } from './Main.styled.js';
import items from '../../database/items.seed';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <StyledMain>
                <Sidebar/>
                <Window/>
            </StyledMain>
        )
    }
}

export default Main;

