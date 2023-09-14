import { ISkillsItem } from "@/types";
import { Text } from "@react-pdf/renderer";
import styles from "../../styles";

export default function SkillsItem(props: ISkillsItem) {
	return (
		<Text style={styles.skillsItem}>
			<Text style={styles.skillsItemTitle}>{props.title}: </Text>
			<Text style={styles.skillsItemItems}>
				{props.skills.map(
					(skill, index) =>
						`${skill}${
							index === props.skills.length - 1 ? "" : ", "
						}`,
				)}
			</Text>
		</Text>
	);
}
