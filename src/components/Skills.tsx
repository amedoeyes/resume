import SkillsList from "./SkillsList";

export default function Skills() {
	return (
		<section className="flex flex-col gap-2">
			<h3>SKILLS</h3>

			<SkillsList
				title="Languages"
				skills={["TypeScript", "JavaScript", "PHP", "Python", "Bash"]}
			/>

			<SkillsList
				title="Front-End"
				skills={[
					"React.js",
					"Redux",
					"SASS",
					"Tailwind",
					"MUI",
					"Bootstrap",
				]}
			/>

			<SkillsList
				title="Back-End"
				skills={[
					"Laravel",
					"Next.js",
					"Node.js",
					"Express.js",
					"Mongoose",
					"JWT",
				]}
			/>

			<SkillsList title="Databases" skills={["MySQL", "MongoDB"]} />

			<SkillsList title="DevOps" skills={["Jest", "Git", "Linux"]} />
		</section>
	);
}
