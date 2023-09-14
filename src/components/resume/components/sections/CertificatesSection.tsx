import { ICertificatesItem, ISection } from "@/types";
import styles from "../../styles";
import Section from "../Section";
import CertificatesItem from "../items/CertificatesItem";

export default function CertificatesSection(
	props: ISection<ICertificatesItem>,
) {
	return (
		<Section
			title={props.title || "Certificates"}
			style={styles.certificates}
		>
			{props.items.map((item, index) => (
				<CertificatesItem key={index} {...item} />
			))}
		</Section>
	);
}
