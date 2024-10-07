import { AppWrapper, Container } from "./style/app-style.ts";
import GroupBits from "../components/group-bits";

const App = () => {
    return(
        <Container>
            <AppWrapper>
                <GroupBits instrument={'snare'}/>
            </AppWrapper>
        </Container>
    );
}

export default App;