import OneBit from "../one-bit";
import styled from "styled-components";

interface IFourBits {
    type: 'kick' | 'snare' | 'cymbal' | 'hi-hat' | 'crash' | 'tom1' | 'tom2' | 'tom3';
}

const SubGroup = ({type}: IFourBits) => {
    const SunGroutStyle = styled.div`
        display: flex;
        margin: 5px 10px;
    `;

    return (
        <SunGroutStyle>
            <OneBit type={type}/>
        </SunGroutStyle>
    );
};

export default SubGroup;
