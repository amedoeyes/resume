import Certification from "./Certification";

export default function Education() {
	return (
		<section className="flex flex-col gap-2">
			<h3>EDUCATION</h3>

			<Certification
				title="Bachelor's Degree in Geographic Information Systems (GIS)"
				Organization="Mansoura University"
				date="July 2022"
			/>

			<Certification
				title="Certificate of Completion - Full-Stack Web Development"
				Organization="University of Helsinki"
				date="November 2022"
				link="https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/139168045decba293f1872ae65e5262e"
			/>
		</section>
	);
}
