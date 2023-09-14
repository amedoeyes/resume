import { Text, View } from "@react-pdf/renderer";
import { Style } from "@react-pdf/types";
import styles from "../styles";

type SectionProps = {
	title: string;
	style?: Style | Style[];
	children: React.ReactNode;
};

export default function Section(props: SectionProps) {
	return (
		<View style={styles.section}>
			<Text style={styles.sectionHeader}>
				<Text style={{ fontSize: styles.sectionHeader.fontSize + 4 }}>
					{props.title[0]}
				</Text>
				{props.title.slice(1)}
			</Text>

			<View style={Object.assign({}, styles.sectionBody, props.style)}>
				{props.children}
			</View>
		</View>
	);
}
