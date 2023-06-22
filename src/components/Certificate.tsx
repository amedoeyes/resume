type CertificateProps = {
	title: string;
	Organization: string;
	startDate: string;
	endDate: string;
	link?: string;
};

export default function Certificate({ title, Organization, startDate, endDate, link }: CertificateProps) {
	return (
		<div>
			<div className="flex items-center justify-between">
				<h4 className="text-sm font-medium">{title}</h4>
				<p className="text-xs opacity-75 ">
					{startDate} - {endDate}
				</p>
			</div>

			<div className="flex items-center justify-between">
				<p className="text-sm">{Organization}</p>
				{link && (
					<a href={link} className="text-xs opacity-50">
						{link.split("/").pop()}
					</a>
				)}
			</div>
		</div>
	);
}
