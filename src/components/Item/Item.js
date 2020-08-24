import React from 'react';

import { StyledItem } from './Item.styled.js';

const Item = props => {
    return(
        <StyledItem>
            <h1>{props.name}</h1>
            <img src= "https://static.wikia.nocookie.net/riskofrain2_gamepedia_en/images/3/31/Corpsebloom.png/revision/latest/scale-to-width-down/256?cb=20200129193043"/>
        </StyledItem>
    )
}

export default Item;

