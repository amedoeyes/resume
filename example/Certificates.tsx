import Section from "../src/components/Section";
import Certificate from "../src/components/Certificate";

export default function Certificates() {
	return (
		<Section title="Certificates">
			<Certificate
				title="Example Certificate"
				Organization="Example Organization"
				startDate="xxxx"
				endDate="xxxx"
				link="https://example.com/exampleID"
			/>
			<Certificate
				title="Example Certificate"
				Organization="Example Organization"
				startDate="xxxx"
				endDate="xxxx"
				link="https://example.com/exampleID"
			/>
			<Certificate
				title="Example Certificate"
				Organization="Example Organization"
				startDate="xxxx"
				endDate="xxxx"
				link="https://example.com/exampleID"
			/>
		</Section>
	);
}
