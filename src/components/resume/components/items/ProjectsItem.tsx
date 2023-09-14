import { IProjectsItem } from "@/types";
import { Text, View } from "@react-pdf/renderer";
import styles from "../../styles";

export default function ProjectsItem(props: IProjectsItem) {
	return (
		<View style={styles.projectsItem}>
			<View style={styles.projectsItemHeader}>
				<Text>{props.title}</Text>
				<Text>
					{props.startDate} - {props.endDate}
				</Text>
			</View>

			<View style={styles.projectsItemDescription}>
				{props.description.map((text, index) => (
					<View key={index} style={{ flexDirection: "row" }}>
						<Text>{text.replace(/^-/, "•").trim()}</Text>
					</View>
				))}
			</View>
		</View>
	);
}
