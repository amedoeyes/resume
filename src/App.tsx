import Example from "../example/Example";
import PrintButton from "./components/PrintButton";
import Resume from "./resume/Resume";

export default function App() {
	return (
		<div className="flex flex-col w-full">
			<header className="sticky top-0 flex items-center justify-between w-full h-20 px-4 bg-black print:hidden">
				<h2 className="text-lg text-white">{document.title}</h2>
				<PrintButton />
			</header>
			<div id="page" className="p-14 font-serif w-[21cm] h-[29.7cm] m-auto bg-white">
				<Resume />
				{/* <Example /> */}
			</div>
		</div>
	);
}
