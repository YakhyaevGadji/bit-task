import styled from "styled-components";

interface IOneBite {
    type: string;
}

const OneBit = ({type}: IOneBite) => {
    const instrumentStyle: {[kick: string]: string} = {
        kick: 'red',
        snare: 'yellow'
    };

    const BitBlock = styled.div`
        width: 60px;
        height: 60px;
        margin: 3px;
        border-radius: 5px;
        cursor: pointer;
        background-color: ${props => props.color};
    `;

    return (
        <BitBlock color={instrumentStyle[type]}/>
    );
};

export default OneBit;
