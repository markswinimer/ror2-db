import React from 'react';

import Item from '../Item/Item';

import { StyledWindow, Section } from './Window.styled.js';
import itemsSeed from '../../database/items.seed';

class Window extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: null
        }
    }

    componentDidMount() {
        this.setState({ items: itemsSeed });
    }
    render() {
        let commonItems = null;

        if(this.state.items) {
            console.log(this.state.items)

            commonItems = this.state.items.items.map(item => {
                return <Item name={item.name} />
            })
        }
        return(
            <StyledWindow>
                <Section>
                    <h1>Common</h1>
                    {commonItems}
                </Section>
                Window Page
            </StyledWindow>
        )
    }
}

export default Window;

