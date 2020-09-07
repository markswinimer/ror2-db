import React from 'react';

import Sidebar from '../Sidebar/Sidebar';
import ItemList from '../ItemList/ItemList';
import Item from '../Item/Item';

import { StyledMain } from './Main.styled.js';
import { getAllItems } from '../../data.js';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentItemInfo: null,
            items: null
        }
        this.getCurrentInfo = this.getCurrentInfo.bind(this);
    }
    componentDidMount(){
        this.setState({ items: getAllItems() })
    }
    getCurrentInfo(e){
        let id = e.target.id;
        let item = this.state.items.find(item => item.id === id)
        this.setState({ currentItemInfo: item });
    }
    render() {
        const { items } = this.state;
        let allItems = items ? items : null;
        
        return(
            <StyledMain>
                <Sidebar
                    currentItemInfo={this.state.currentItemInfo}/>
                <ItemList
                    handleHover={this.getCurrentInfo}
                    items={allItems}
                />
            </StyledMain>
        )
    }
}

export default Main;

