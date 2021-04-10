import {FaGithub, FaExternalLinkAlt} from 'react-icons/fa';

const Card = props => {
    return (<figure className = 'card'>
        <img src = {props.image} alt = {props.alt}></img>
        <figcaption className = 'card-info'>
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
            <span>
                <FaGithub className = 'icon' />
                <FaExternalLinkAlt className = 'icon'/>
            </span>
        </figcaption>
    </figure>);
}

export default Card;