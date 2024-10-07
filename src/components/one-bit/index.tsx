import { BitBlock } from "./style.ts";

interface IOneBite {
    type: string;
}

const OneBit = ({type}: IOneBite) => {
    const instrumentStyle: {[kick: string]: string} = {
        kick: 'red',
        snare: 'yellow'
    };

    return (
        <BitBlock color={instrumentStyle[type]}/>
    );
};

export default OneBit;
