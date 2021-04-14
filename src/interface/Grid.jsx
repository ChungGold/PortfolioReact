import Card from '../components/Card';
import Projects from '../objects/Projects';

const createCard = (Projects) => {
    return (
        <Card 
        image = {Projects.image}
        alt = {Projects.alt}
        title = {Projects.title}
        desc = {Projects.desc}
        github = {Projects.github}
        link = {Projects.link}
    />
    )
}

const Grid = props => {
    return (<section id = 'projects-grid'>
        {Projects.map(createCard)}
    </section>);
}

export default Grid;