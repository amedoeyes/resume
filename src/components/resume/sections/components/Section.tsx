import { Text, View } from "@react-pdf/renderer";
import styles from "../../styles";

type SectionProps = {
	title: string;
	children: React.ReactNode;
};

export default function Section({ title, children }: SectionProps) {
	return (
		<View style={styles.section}>
			<Text style={styles.sectionHeader}>
				<Text style={{ fontSize: styles.sectionHeader.fontSize + 4 }}>
					{title[0]}
				</Text>
				{title.slice(1)}
			</Text>

			<View style={styles.sectionContent}>{children}</View>
		</View>
	);
}
