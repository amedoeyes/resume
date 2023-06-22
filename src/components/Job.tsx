type JobProps = {
	title: string;
	company: string;
	description: string;
	startDate: string;
	endDate: string;
};

export default function Job({ title, company, description, startDate, endDate }: JobProps) {
	return (
		<div>
			<div className="flex items-center justify-between">
				<h4 className="text-sm font-medium">{title}</h4>
				<p className="text-sm">{company}</p>
				<p className="text-xs opacity-75">
					{startDate} - {endDate}
				</p>
			</div>

			<p className="text-xs">{description}</p>
		</div>
	);
}
