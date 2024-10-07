import styled from "styled-components";


export const BitBlock = styled.div`
        width: 60px;
        height: 60px;
        margin: 3px;
        border-radius: 5px;
        cursor: pointer;
        background-color: ${props => props.color};
`;