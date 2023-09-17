import { IResume } from "@/types";
import { Document, Page, View } from "@react-pdf/renderer";
import Header from "./components/Header";
import Sections from "./components/Sections";
import styles from "./styles";

export default function Resume(props: IResume) {
	return (
		<Document style={styles.document} {...props.meta}>
			<Page size="A4" style={styles.page}>
				<View>
					<Header {...props.header} />
					<Sections
						sections={props.sections}
						order={props.sectionsOrder}
					/>
				</View>
			</Page>
		</Document>
	);
}
