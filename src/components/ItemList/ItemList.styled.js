import styled from "styled-components";

export const StyledItemList = styled.div`
    display: flex;
    flex-direction: column;
    overflow: scroll;
    min-height: 100vh;
    flex: 2;
    padding: 1em;
`

export const Section = styled.div`
    display: flex;
    flex-direction: row;
    height: auto;
    flex-wrap: wrap;
    padding: 1em;
    margin-bottom: 1em;
`

export const CategoryDivider = styled.div`
    margin: 0em;
    font-size: 25px;
    font-family: 'Coda', cursive;
    color: #E6BD64;
    border-bottom: 1px solid #E6BD64;   
`