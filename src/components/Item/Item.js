import React from 'react';

import { StyledItem, ItemIcon } from './Item.styled.js';

const Item = props => {
    return(
        <StyledItem>
            <ItemIcon onMouseEnter={props.handleHover} id={props.item} item={props.item} src="/backup_magazine.png" />
        </StyledItem>
    )
}

export default Item;

