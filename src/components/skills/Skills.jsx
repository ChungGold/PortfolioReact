import SkillCard from './SkillCard'
import Languages from './Languages'

const Skills = () => {
    return (<section id = 'skillset'>
        <SkillCard 
            name = {Languages[0].name}
        />
    </section>);
}

export default Skills;