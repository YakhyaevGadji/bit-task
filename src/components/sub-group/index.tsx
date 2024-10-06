import OneBit from "../one-bit";
import styled from "styled-components";

interface IFourBits {
    type: 'kick' | 'snare' | 'cymbal' | 'hi-hat' | 'crash' | 'tom1' | 'tom2' | 'tom3';
    count: number;
}

const SubGroup = ({type, count}: IFourBits) => {
    const SunGroutStyle = styled.div`
        display: flex;
        margin: 5px 10px;
    `;

    return (
        <SunGroutStyle>
            {[...new Array(count)].map((_) => (
                <OneBit type={type}/>
            ))}
        </SunGroutStyle>
    );
};

export default SubGroup;
