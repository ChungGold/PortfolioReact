import Cube from './Cube'
import Typer from './Typer'
import Blinker from './Blinker'
import { Intro } from './LandingStyles'

const Landing = () => {
    const {msg} = Typer();
    const {blink} = Blinker();

    return (
        <Intro>
            <Cube />
            <article>
                <h1>{msg}{blink}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat in fermentum posuere urna nec tincidunt praesent semper. Lacus sed turpis tincidunt id aliquet risus feugiat in. </p>
            </article>
        </Intro>
    )
}

export default Landing;