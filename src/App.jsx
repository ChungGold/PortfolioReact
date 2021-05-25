import styled from 'styled-components';
import Landing from "./components/landingPage/Landing"
import Grid from "./components/projects/Grid"
import Skills from "./components/skills/Skills"

const Container = styled.div`
    width: 100vw;
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
`

const App = () => {
    return (
        <Container>
            <Landing />
            <Grid />
            <Skills />
        </Container>
    );
}

export default App;