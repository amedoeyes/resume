import { IEducation } from "../../../types";
import Degree from "./components/Degree";
import Section from "./components/Section";

type EducationProps = {
	education: IEducation;
};

export default function Education({ education }: EducationProps) {
	return (
		<Section title={education.title || "Education"}>
			{education.items.map((item, index) => (
				<Degree
					key={index}
					title={item.title}
					institution={item.institution}
					startDate={item.startDate}
					endDate={item.endDate}
				/>
			))}
		</Section>
	);
}
