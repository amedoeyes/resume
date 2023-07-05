import { ICertificates } from "../../../types";
import Certificate from "./components/Certificate";
import Section from "./components/Section";

type CertificatesProps = {
	certificates: ICertificates;
};

export default function Certificates({ certificates }: CertificatesProps) {
	return (
		<Section title={certificates.title || "Certificates"}>
			{certificates.items.map((item, index) => (
				<Certificate
					key={index}
					title={item.title}
					institution={item.institution}
					startDate={item.startDate}
					endDate={item.endDate}
					link={item.link}
				/>
			))}
		</Section>
	);
}
