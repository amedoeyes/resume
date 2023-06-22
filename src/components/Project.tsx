type ProjectProps = {
	title: string;
	description: string;
	stack: string[];
	link: string;
};

export default function Project({ title, description, stack, link }: ProjectProps) {
	return (
		<div>
			<div className="flex items-center justify-between">
				<h4 className="text-sm font-medium">{title}</h4>
				<a href={link} className="text-xs opacity-50">
					{link.replace("https://", "")}
				</a>
			</div>

			<div className="flex justify-between gap-4">
				<p className="w-1/2 text-xs">{description}</p>
				<p className="w-1/2 text-xs text-right opacity-75">
					{stack.map((tech, index) => (
						<span key={index}>
							{tech}
							{index === stack.length - 1 ? "" : ", "}
						</span>
					))}
				</p>
			</div>
		</div>
	);
}
