import Landing from "./interface/Landing"
import Grid from "./interface/Grid"
import Skills from "./interface/Skills"

const App = props => {
    return (<div id = 'app'>
        <Landing />
        <Grid />
        <Skills />
    </div>);
}

export default App;