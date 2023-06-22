type SkillsListProps = {
	title: string;
	skills: string[];
};

export default function SkillsList({ title, skills }: SkillsListProps) {
	return (
		<div className="flex items-center gap-1">
			<h4 className="text-sm font-medium">{title}:</h4>

			<p className="text-sm opacity-75">
				{skills.map((skill, index) => (
					<span key={index}>
						{skill}
						{index === skills.length - 1 ? "" : ", "}
					</span>
				))}
			</p>
		</div>
	);
}
