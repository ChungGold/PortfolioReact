import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { ProjectCard } from './ProjectStyles'


const Card = props => {
    return (
        <ProjectCard>
            <img src = {props.image} alt = {props.alt}></img>
            <figcaption>
                <h1>{props.title}</h1>
                <p>{props.desc}</p>
                <span>
                    <a href = {props.github}><FaGithub className = 'icon' /></a>
                    <a href = {props.link}><FaExternalLinkAlt className = 'icon'/></a>
                </span>
            </figcaption>
        </ProjectCard>
    );
}

export default Card;