import Degree from "../components/Degree";
import Section from "../components/Section";

export default function Education() {
	return (
		<Section title="Education">
			<Degree
				title="Bachelor's Degree in Geographic Information Systems"
				University="Mansoura University"
				startDate="Sep 2018"
				endDate="Jun 2022"
			/>
		</Section>
	);
}
