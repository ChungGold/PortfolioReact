import {FaGithub, FaExternalLinkAlt} from 'react-icons/fa';

const Card = props => {
    return (<figure className = 'box'>
        <img src = {props.image}></img>
        <figcaption>
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
            <FaGithub className = 'icon' />
            <FaExternalLinkAlt className = 'icon'/>
        </figcaption>
    </figure>);
}

export default Card;