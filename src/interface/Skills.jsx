import SkillCard from '../components/SkillCard'
import Languages from '../objects/Languages'

const Skills = () => {
    return (<section id = 'skillset'>
        <SkillCard 
            name = {Languages[0].name}
        />
    </section>);
}

export default Skills;