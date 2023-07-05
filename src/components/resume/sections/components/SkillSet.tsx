import { Text, View } from "@react-pdf/renderer";
import { ISkillSet } from "../../../../types";
import styles from "../../styles";

export default function SkillSet({ title, skills }: ISkillSet) {
	return (
		<View style={styles.stack}>
			<Text style={[styles.fs1, styles.fw1]}>{title}: </Text>

			<Text style={[styles.fs1, styles.op1, styles.right]}>
				{skills.map((skill, index) => (
					<Text key={index}>
						{skill}
						{index === skills.length - 1 ? "" : ", "}
					</Text>
				))}
			</Text>
		</View>
	);
}
