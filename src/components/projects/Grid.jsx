import Card from './Card'
import Projects from './Projects'
import { ProjectsSection } from './ProjectStyles'

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

const Grid = () => {
    return (
        <ProjectsSection>
            {Projects.map(createCard)}
        </ProjectsSection>
    );
}

export default Grid;