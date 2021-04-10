import {SiHtml5, SiCss3, SiJavascript, SiReact} from 'react-icons/si';
// , SiBootstrap, SiSass, SiTailwindcss, SiJquery

const SkillCard = props => {
    return (<figure className = 'skill-groups'>
        <figcaption className = 'skill-title'>
            <h1>FRONT-END</h1>
        </figcaption>
        <div className = 'skill-container'>
            <h3>HTML</h3>
            <SiHtml5 />
            <h3>CSS</h3>
            <SiCss3 />
            <h3>JavaScript</h3>
            <SiJavascript />
            <h3>React</h3>
            <SiReact />
        </div>
    </figure>);
}

export default SkillCard;