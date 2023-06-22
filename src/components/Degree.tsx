type DegreeProps = {
	title: string;
	University: string;
	startDate: string;
	endDate: string;
};

export default function Degree({ title, University, startDate, endDate }: DegreeProps) {
	return (
		<div>
			<div className="flex items-center justify-between">
				<h4 className="text-sm font-medium">{title}</h4>
				<p className="text-xs opacity-75 ">
					{startDate} - {endDate}
				</p>
			</div>

			<p className="text-sm">{University}</p>
		</div>
	);
}
