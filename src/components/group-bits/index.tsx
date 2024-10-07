import SubGroup from "../sub-group";
import {GroupStyle} from "./style.ts";

interface IGroupBits {
    instrument: 'kick' | 'snare' | 'cymbal' | 'hi-hat' | 'crash' | 'tom1' | 'tom2' | 'tom3';
}

const GroupBits = ({ instrument }: IGroupBits) => {
    return (
        <GroupStyle color={instrument}>
            <SubGroup type={instrument}/>
        </GroupStyle>
    );
};

export default GroupBits;