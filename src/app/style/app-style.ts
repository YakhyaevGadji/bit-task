import styled from "styled-components";

export const AppWrapper = styled.div`
    width: 1200px;
    height: 600px;
    background-color: #1c1c1c;
    border-radius: 10px;
`;

export const Container =  styled.div`
    max-width: 1200px;
    margin: 50px auto;
`;

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(8, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
`