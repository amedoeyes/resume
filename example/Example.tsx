import Header from "../src/components/Header";
import Certificates from "./Certificates";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";

export default function Example() {
	return (
		<div>
			<Header
				fistName="First"
				lastName="Last"
				email="example@example.com"
				phone="+123456789"
				links={["https://linkedin.com/in/example", "https://github.com/example"]}
			/>

			<main className="flex flex-col gap-4">
				<Experience />
				<Skills />
				<Projects />
				<Certificates />
				<Education />
			</main>
		</div>
	);
}
