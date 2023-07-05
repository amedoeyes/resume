import { ISkill } from "../../../types";
import Section from "./components/Section";
import SkillSet from "./components/SkillSet";

type SkillsProps = {
	skills: ISkill;
};

export default function Skills({ skills }: SkillsProps) {
	return (
		<Section title={skills.title || "Skills"}>
			{skills.items.map((item, index) => (
				<SkillSet key={index} title={item.title} skills={item.skills} />
			))}
		</Section>
	);
}
