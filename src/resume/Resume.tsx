import Header from "../components/Header";
import Certificates from "./Certificates";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";

export default function Resume() {
	return (
		<div>
			<Header
				fistName="Ahmed"
				lastName="AbouEleyoun"
				email="ahmed.m.aboueleyoun@gmail.com"
				phone="+20 100 240 3588"
				links={["https://linkedin.com/in/ahmed-aboueleyoun", "https://github.com/amedoeyes"]}
			/>
			<main className="flex flex-col gap-4">
				{/* <Experience /> */}
				<Skills />
				<Projects />
				<Certificates />
				<Education />
			</main>
		</div>
	);
}
