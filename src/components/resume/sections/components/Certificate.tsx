import { Link, Text, View } from "@react-pdf/renderer";
import { ICertificate } from "../../../../types";
import styles from "../../styles";

export default function Certificate({
	title,
	institution,
	startDate,
	endDate,
	link,
}: ICertificate) {
	return (
		<View>
			<View style={styles.stack}>
				<Text style={[styles.fs1, styles.fw1]}>{title}</Text>
				<Text style={[styles.fs2, styles.op1]}>
					{startDate} - {endDate}
				</Text>
			</View>

			<View style={styles.stack}>
				<Text style={styles.fs2}>{institution}</Text>
				{link && (
					<Link src={link} style={[styles.link, styles.fs2, styles.op2]}>
						{link.split("/").pop()}
					</Link>
				)}
			</View>
		</View>
	);
}
