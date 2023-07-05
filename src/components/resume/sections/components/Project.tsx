import { Link, Text, View } from "@react-pdf/renderer";
import { IProject } from "../../../../types";
import styles from "../../styles";

export default function Project({ title, description, stack, link }: IProject) {
	return (
		<View>
			<View style={styles.stack}>
				<Text style={[styles.fs1, styles.fw1]}>{title}</Text>
				<Link src={link} style={[styles.link, styles.fs2, styles.op2]}>
					{link.replace("https://", "")}
				</Link>
			</View>

			<View style={styles.stack}>
				<Text style={[styles.fs2, styles.lhalf]}>{description}</Text>
				<Text style={[styles.fs2, styles.op1, styles.right, styles.rhalf]}>
					{stack.map((tech, index) => (
						<Text key={index}>
							{tech}
							{index === stack.length - 1 ? "" : ", "}
						</Text>
					))}
				</Text>
			</View>
		</View>
	);
}
