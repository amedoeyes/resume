import { IEducationItem } from "@/types";
import { Text, View } from "@react-pdf/renderer";
import styles from "../../styles";

export default function EducationItem(props: IEducationItem) {
	return (
		<View style={styles.educationItem}>
			<View style={styles.educationItemHeader}>
				<Text>{props.title}</Text>
				<Text>
					{props.startDate} - {props.endDate}
				</Text>
			</View>

			<View style={styles.educationItemBody}>
				<Text>{props.institution}</Text>
				{props.gpa && <Text>GPA: {props.gpa}</Text>}
			</View>
		</View>
	);
}
