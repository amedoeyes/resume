import { ISection, ISkillsItem } from "@/types";
import styles from "../../styles";
import Section from "../Section";
import SkillsItem from "../items/SkillsItem";

export default function SkillsSection(props: ISection<ISkillsItem>) {
	return (
		<Section title={props.title || "Skills"} style={styles.skills}>
			{props.items.map((item, index) => (
				<SkillsItem key={index} {...item} />
			))}
		</Section>
	);
}
