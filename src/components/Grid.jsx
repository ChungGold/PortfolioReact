import Card from './Card';
import Projects from '../JSON/Projects';

const createCard = (Projects) => {
    return (
        <Card 
        image = {Projects.image}
        title = {Projects.title}
        desc = {Projects.desc}
        alt = {Projects.alt}
    />
    )
}

const Grid = props => {
    return (<section id = 'projects-grid'>
        {Projects.map(createCard)}
    </section>);
}

export default Grid;