import Section from "../components/Section";
import SkillsList from "../components/SkillsList";

export default function Skills() {
	return (
		<Section title="Skills">
			<SkillsList title="Languages" skills={["TypeScript", "JavaScript", "PHP", "Python", "Bash"]} />
			<SkillsList title="Front-End" skills={["React.js", "Redux", "SASS", "Tailwind", "MUI", "Bootstrap"]} />
			<SkillsList title="Back-End" skills={["Laravel", "Next.js", "Node.js", "Express.js", "Mongoose", "JWT"]} />
			<SkillsList title="Databases" skills={["MySQL", "MongoDB"]} />
			<SkillsList title="Other" skills={["Jest", "Git", "Linux"]} />
		</Section>
	);
}
