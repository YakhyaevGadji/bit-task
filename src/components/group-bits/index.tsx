import styled from "styled-components";
import SubGroup from "../sub-group";

interface IGroupBits {
    instrument: 'kick' | 'snare' | 'cymbal' | 'hi-hat' | 'crash' | 'tom1' | 'tom2' | 'tom3';
    countGroup: number;
    countBit: number;
}

const GroupBits = ({ instrument, countGroup, countBit }: IGroupBits) => {
    const GroupStyle = styled.div`
        display: flex;
    `;

    return (
        <GroupStyle color={instrument}>
            {[...new Array(countGroup)].map((_) => (
                <SubGroup type={instrument} count={countBit} />
            ))}
        </GroupStyle>
    );
};

export default GroupBits;