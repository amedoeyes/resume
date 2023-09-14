import { IExperienceItem } from "@/types";
import { Text, View } from "@react-pdf/renderer";
import styles from "../../styles";

export default function ExperienceItem(props: IExperienceItem) {
	return (
		<View style={styles.experienceItem}>
			<View style={styles.experienceItemHeader}>
				<Text>{props.title}</Text>
				<Text>{props.company}</Text>
				<Text>
					{props.startDate} - {props.endDate}
				</Text>
			</View>

			<View style={styles.experienceItemDescription}>
				{props.description.map((text, index) => (
					<View key={index} style={{ flexDirection: "row" }}>
						<Text>{text.replace(/^-/, "•").trim()}</Text>
					</View>
				))}
			</View>
		</View>
	);
}
