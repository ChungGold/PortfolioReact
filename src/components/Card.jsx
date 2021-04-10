import {FaGithub, FaExternalLinkAlt} from 'react-icons/fa';

const Card = props => {
    return (<figure className = 'card'>
        <img src = {props.image} alt = {props.alt}></img>
        <figcaption className = 'card-info'>
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
            <span>
                <a href = {props.github}><FaGithub className = 'icon' /></a>
                <a href = {props.link}><FaExternalLinkAlt className = 'icon'/></a>
            </span>
        </figcaption>
    </figure>);
}

export default Card;