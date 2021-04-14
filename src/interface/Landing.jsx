import Typer from '../components/Typer'
import Blinker from '../components/Blinker'
import Drop from '../components/Drop'

const Landing = props => {
    const {msg} = Typer();
    const {blink} = Blinker();

    return (<section id = 'landing-page'>
        <article id = 'landing-header'>
            <h1>{msg}{blink}</h1>
            <Drop />
        </article>
    </section>);
}

export default Landing;