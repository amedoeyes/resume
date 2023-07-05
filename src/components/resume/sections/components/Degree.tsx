import { Text, View } from "@react-pdf/renderer";
import { IDegree } from "../../../../types";
import styles from "../../styles";

export default function Degree({
	title,
	institution,
	startDate,
	endDate,
}: IDegree) {
	return (
		<View>
			<View style={styles.stack}>
				<Text style={[styles.fs1, styles.fw1]}>{title}</Text>
				<Text style={[styles.fs2, styles.op1]}>
					{startDate} - {endDate}
				</Text>
			</View>

			<Text style={styles.fs2}>{institution}</Text>
		</View>
	);
}
