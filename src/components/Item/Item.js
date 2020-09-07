import React from 'react';

import { StyledItem, ItemIcon } from './Item.styled.js';

const Item = props => {
    return(
        <StyledItem>
            <ItemIcon 
                onMouseEnter={props.handleHover} 
                category={props.category} 
                id={props.id} 
                item={props.item} 
                src={"/images/items/" + props.icon} />
        </StyledItem>
    )
}

export default Item;

