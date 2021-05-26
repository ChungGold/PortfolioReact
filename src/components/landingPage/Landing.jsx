import { FiGithub, FiLinkedin } from 'react-icons/fi'
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
                <p>I’m a frontend developer with a knack for CSS. I enjoy building the front-end of websites and applications from the ground up. I have a lot of fun with UI/UX, but I get true satisfaction from crunching code in React.js, JavaScript, CSS, and HTML. I documented all of my growth as a developer on LinkedIn since day 1, check it out! </p>
            </article>
            <figure>
                <a href="https://github.com/ChungGold"><FiGithub /></a>
                <a href="https://www.linkedin.com/in/chung-au/"><FiLinkedin /></a>
            </figure>
        </Intro>
    )
}

export default Landing;