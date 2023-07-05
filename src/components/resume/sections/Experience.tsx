import { IExperience } from "../../../types";
import Job from "./components/Job";
import Section from "./components/Section";

type ExperienceProps = {
	experience: IExperience;
};

export default function Experience({ experience }: ExperienceProps) {
	return (
		<Section title={experience.title || "Experience"}>
			{experience.items.map((item, index) => {
				return (
					<Job
						key={index}
						title={item.title}
						description={item.description}
						company={item.company}
						startDate={item.startDate}
						endDate={item.endDate}
					/>
				);
			})}
		</Section>
	);
}
