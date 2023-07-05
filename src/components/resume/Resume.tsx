import { Document, Page, View } from "@react-pdf/renderer";
import { IResume } from "../../types";
import Header from "./Header";
import Sections from "./Sections";
import styles from "./styles";

export default function Resume({ header, sections }: IResume) {
	return (
		<Document
			style={styles.document}
			title="Resume"
			author="Ahmed AbouEleyoun"
			subject="Resume"
			keywords="Resume"
		>
			<Page size="A4" style={styles.page}>
				<View>
					<Header
						firstName={header.firstName}
						lastName={header.lastName}
						email={header.email}
						phone={header.phone}
						links={header.links}
					/>
					<Sections sections={sections} />
				</View>
			</Page>
		</Document>
	);
}
