type ProjectProps = {
	title: string;
	description: string;
	stack: string[];
	link: string;
};

export default function Project({
	title,
	description,
	stack,
	link,
}: ProjectProps) {
	return (
		<div>
			<h4>{title}</h4>
			<p>{description}</p>
			<ul className="flex gap-1">
				{stack.map((item) => (
					<li className="text-sm opacity-90" key={item}>
						{item}
					</li>
				))}
			</ul>
			<a href={link}>{link}</a>
		</div>
	);
}
