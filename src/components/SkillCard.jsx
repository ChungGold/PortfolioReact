import {SiHtml5, SiCss3, SiJavascript, SiReact} from 'react-icons/si';
// , SiBootstrap, SiSass, SiTailwindcss, SiJquery

const SkillCard = props => {
    return (<figure className = 'skill'>
        <figure className = 'skillSvg'>
            <SiHtml5 />
        </figure>
        <figcaption className = 'skill-name'>
            <h1>{props.name}</h1>
        </figcaption>
    </figure>);
}

export default SkillCard;