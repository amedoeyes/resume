import { IEducationItem, ISection } from "../../../../types";
import styles from "../../styles";
import Section from "../Section";
import EducationItem from "../items/EducationItem";

export default function EducationSection(props: ISection<IEducationItem>) {
	return (
		<Section title={props.title || "Education"} style={styles.education}>
			{props.items.map((item, index) => (
				<EducationItem key={index} {...item} />
			))}
		</Section>
	);
}
