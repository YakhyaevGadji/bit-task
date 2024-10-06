import { AppWrapper, Container } from "./style/app-style.ts";
import GroupBits from "../components/group-bits";

const App = () => {
    return(
        <Container>
            <AppWrapper>
                <GroupBits instrument={'snare'} countGroup={3} countBit={4}/>
                <GroupBits instrument={'kick'} countGroup={3} countBit={4}/>
            </AppWrapper>
        </Container>
    );
}

export default App;