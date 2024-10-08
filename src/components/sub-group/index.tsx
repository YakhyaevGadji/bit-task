import OneBit from "../one-bit";
import {SunGroutStyle} from "./style.ts";

interface IFourBits {
    type: 'kick' | 'snare' | 'cymbal' | 'hi-hat' | 'crash' | 'tom1' | 'tom2' | 'tom3';
}

const SubGroup = ({type}: IFourBits) => {
    return (
        <SunGroutStyle>
            <OneBit type={type}/>
        </SunGroutStyle>
    );
};

export default SubGroup;
