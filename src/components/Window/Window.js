import React from 'react';

import Item from '../Item/Item';

import { StyledWindow, Section, CategoryDivider } from './Window.styled.js';
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
                return <Item item={item} id={item.name} name={item.name} handleHover={this.props.handleHover}/>
            })
        }
        return(
            <StyledWindow>
                <CategoryDivider>
                    Common
                </CategoryDivider>
                <Section>
                    {commonItems}
                </Section>
                <CategoryDivider>
                    Uncommon
                </CategoryDivider>
                <Section>
                    {commonItems}
                </Section>

                <CategoryDivider>
                    Legendary
                </CategoryDivider>
                <Section>
                    {commonItems}
                </Section>

                <CategoryDivider>
                    Boss
                </CategoryDivider>
                <Section>
                    {commonItems}
                </Section>
            </StyledWindow>
        )
    }
}

export default Window;

