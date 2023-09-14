import { ICertificatesItem } from "@/types";
import { Text, View } from "@react-pdf/renderer";
import styles from "../../styles";

export default function CertificatesItem(props: ICertificatesItem) {
	return (
		<View style={styles.certificatesItem}>
			<View style={styles.certificatesItemHeader}>
				<Text>{props.title}</Text>
				<Text>
					{props.startDate} - {props.endDate}
				</Text>
			</View>

			<View style={styles.certificatesItemBody}>
				<Text>{props.institution}</Text>
				<Text>{props.id}</Text>
			</View>
		</View>
	);
}
