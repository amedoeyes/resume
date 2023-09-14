import { IExperienceItem, ISection } from "../../../../types";
import styles from "../../styles";
import Section from "../Section";
import ExperienceItem from "../items/ExperienceItem";

export default function ExperienceSection(props: ISection<IExperienceItem>) {
	return (
		<Section title={props.title || "Experience"} style={styles.experience}>
			{props.items.map((item, index) => {
				return <ExperienceItem key={index} {...item} />;
			})}
		</Section>
	);
}
