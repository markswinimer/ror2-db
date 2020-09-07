import styled from "styled-components";

export const StyledSidebar = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    padding: 1em;
    min-height: 100vh;
    background-color: #062949;
    color: white;
    /* border: 2px solid #011730; */

    span {
        .utility {
            color: blue;
        }
        .healing {
            color: green;
        }
        .stack {
            color: yellow;
        }
        .damage {
            color: red;
        }
    }

`

export const Detail = styled.div`
    color: ${props => props === "Healing" ? "green" : "blue" };
`
