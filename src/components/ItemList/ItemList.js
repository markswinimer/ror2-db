import React from 'react';

import Item from '../Item/Item';

import { StyledItemList, Section, CategoryDivider } from './ItemList.styled.js';

class ItemList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.getItemsByCategory = this.getItemsByCategory.bind(this);
    }

    getItemsByCategory(items) {
        let categoryArray = {
            common: [],
            uncommon: [],
            boss: [],
            legendary: [],
            lunar: [],
            exception: []
        };
        items.forEach(item => {
            const type = item.type;
            categoryArray[type].push(item);
        })
        return categoryArray;
    }

    render() {
        let itemsByCategory = this.props.items ? this.getItemsByCategory(this.props.items) : null;
        let itemsArray = []
        if(itemsByCategory) {
            Object.entries(itemsByCategory).forEach(([key, value]) => {
                let categoryArray = value.map(item => {
                    return <Item
                        id={item.id}
                        name={item.name}
                        icon={item.icon}
                        category={item.type}
                        handleHover={this.props.handleHover}
                    />
                })
                itemsArray.push(categoryArray);
            });
        }
        
        return(
            <StyledItemList>
                <CategoryDivider>
                    Common
                </CategoryDivider>
                <Section>
                    {itemsArray[0]}
                </Section>
                <CategoryDivider>
                    Uncommon
                </CategoryDivider>
                <Section>
                    {itemsArray[1]}
                </Section>

                <CategoryDivider>
                    Boss
                </CategoryDivider>
                <Section>
                    {itemsArray[2]}
                </Section>

                <CategoryDivider>
                    Legendary
                </CategoryDivider>
                <Section>
                    {itemsArray[3]}
                </Section>
                <CategoryDivider>
                    Lunar
                </CategoryDivider>
                <Section>
                    {itemsArray[4]}
                </Section>
            </StyledItemList>
        )
    }
}

export default ItemList;

