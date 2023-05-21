type CertificationProps = {
	title: string;
	Organization: string;
	date: string;
	link?: string;
};

export default function Certification({
	title,
	Organization,
	date,
	link,
}: CertificationProps) {
	return (
		<div>
			<h4>{title}</h4>
			<p>
				{Organization} - {date}
			</p>
			{link && <a href={link}>{link.split("/").pop()}</a>}
		</div>
	);
}
