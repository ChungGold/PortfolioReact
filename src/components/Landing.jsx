import Typer from './Typer'

const Landing = props => {
    return (<section id = 'landing-page'>
        <article id = 'landing-header'>
            <Typer />
            <p>I’m a frontend developer with a knack for CSS. 
            I enjoy building the front-end of websites and applications from the ground up. 
            I have a lot of fun with UI/UX, but I get true satisfaction from crunching code in 
            React.js, JavaScript, CSS, and HTML. I documented all of my growth as a developer on 
            LinkedIn since day 1, check it out!</p>
        </article>
    </section>);
}

export default Landing;