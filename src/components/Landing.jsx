import {React, useState } from "react";

function Landing() {
    const [name, typeName] = useState(null);



    return (<section id = 'landing-page'>
        <article id = 'landing-header'>
            <h1>Hello, my name is Chung Au</h1>
            <p>I’m a frontend developer with a knack for CSS. 
            I enjoy building the front-end of websites and applications from the ground up. 
            I have a lot of fun with UI/UX, but I get true satisfaction from crunching code in 
            React.js, JavaScript, CSS, and HTML. I documented all of my growth as a developer on 
            LinkedIn since day 1, check it out!</p>
        </article>
    </section>);
}

export default Landing;