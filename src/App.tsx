import Education from "./components/Education";
import Header from "./components/Header";
import PrintButton from "./components/PrintButton";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
	return (
		<div className="flex flex-col gap-5 p-8">
			<PrintButton />
			<Header />
			<Projects />
			<Education />
			<Skills />
		</div>
	);
}
