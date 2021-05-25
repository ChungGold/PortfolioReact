import Cube from './Cube';
import Typer from './Typer';
import Blinker from './Blinker';

const Landing = () => {
    const {msg} = Typer();
    const {blink} = Blinker();

    return (<section id = 'landing-page'>
        <Cube />
        <article id = 'landing-header'>
            <h1>{msg}{blink}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat in fermentum posuere urna nec tincidunt praesent semper. Lacus sed turpis tincidunt id aliquet risus feugiat in. </p>
        </article>
    </section>);
    
}

export default Landing;