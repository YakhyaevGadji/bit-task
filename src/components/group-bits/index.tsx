import SubGroup from "../sub-group";
import {GroupStyle} from "./style.ts";
import {useAppSelector} from "../../redux/hook.ts";

interface IGroupBits {
    instrument: 'kick' | 'snare';
}

const GroupBits = ({ instrument }: IGroupBits) => {
    const data = useAppSelector((state) => state.data[instrument]);

    console.log(data);

    return (
        <GroupStyle color={instrument}>
            {data.map((item) => (
                <SubGroup key={item.value} type={instrument}/>
            ))}
        </GroupStyle>
    );
};

export default GroupBits;