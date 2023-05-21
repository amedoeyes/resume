type SkillsListProps = {
	title: string;
	skills: string[];
};

export default function SkillsList({ title, skills }: SkillsListProps) {
	return (
		<div className="flex gap-1">
			<h4>{title}:</h4>
			<ul className="flex gap-1">
				{skills.map((skill, index) => (
					<li key={skill}>
						{skill}
						{index === skills.length - 1 ? "" : ","}
					</li>
				))}
			</ul>
		</div>
	);
}
