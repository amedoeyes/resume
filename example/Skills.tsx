import Section from "../src/components/Section";
import SkillsList from "../src/components/SkillsList";

export default function Skills() {
	return (
		<Section title="Skills">
			<SkillsList
				title="Example"
				skills={["Skill", "Skill", "Skill", "Skill", "Skill", "Skill", "Skill", "Skill"]}
			/>
			<SkillsList title="Example" skills={["Skill", "Skill", "Skill", "Skill"]} />
			<SkillsList title="Example" skills={["Skill", "Skill", "Skill", "Skill", "Skill", "Skill"]} />
			<SkillsList title="Example" skills={["Skill", "Skill", "Skill", "Skill", "Skill", "Skill"]} />
			<SkillsList title="Example" skills={["Skill", "Skill", "Skill", "Skill"]} />
		</Section>
	);
}
