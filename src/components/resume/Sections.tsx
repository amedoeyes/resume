import { View } from "@react-pdf/renderer";
import { ISections } from "../../types";
import Certificates from "./sections/Certificates";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import styles from "./styles";

type SectionsOrderProps = {
	sections: ISections;
};

export default function Sections({ sections }: SectionsOrderProps) {
	return (
		<View style={styles.sections}>
			{sections.order.map((section, index) => {
				if (sections[section].items.length === 0) return <></>;

				switch (section) {
					case "experience":
						return (
							<Experience
								key={index}
								experience={sections.experience}
							/>
						);
					case "skills":
						return <Skills key={index} skills={sections.skills} />;
					case "projects":
						return (
							<Projects
								key={index}
								projects={sections.projects}
							/>
						);
					case "certificates":
						return (
							<Certificates
								key={index}
								certificates={sections.certificates}
							/>
						);
					case "education":
						return (
							<Education
								key={index}
								education={sections.education}
							/>
						);
				}
			})}
		</View>
	);
}
