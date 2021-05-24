import styled from 'styled-components';
import Landing from "./interface/Landing"
import Grid from "./interface/Grid"
import Skills from "./interface/Skills"

const Container = styled.div`
    width: 100vw;
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
`

const App = () => {
    return (<Container>
        <Landing />
        <Grid />
        <Skills />
    </Container>);
}

export default App;