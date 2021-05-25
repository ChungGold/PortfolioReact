import SkillCard from './SkillCard'
import Languages from './Languages'
import { Skillset } from './SkillsStyles'

const Skills = () => {
    return (
        <Skillset id = 'skillset'>
            <SkillCard 
                name = {Languages[0].name}
            />
        </Skillset>
    );
}

export default Skills;