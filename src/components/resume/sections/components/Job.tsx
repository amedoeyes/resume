import { Text, View } from "@react-pdf/renderer";
import { IJob } from "../../../../types";
import styles from "../../styles";

export default function Job({
	title,
	company,
	description,
	startDate,
	endDate,
}: IJob) {
	return (
		<View>
			<View style={styles.stack}>
				<Text style={[styles.fs1, styles.fw1]}>{title}</Text>
				<Text style={styles.fs1}>{company}</Text>
				<Text style={[styles.fs2, styles.op1]}>
					{startDate} - {endDate}
				</Text>
			</View>

			<Text style={styles.fs2}>{description}</Text>
		</View>
	);
}
