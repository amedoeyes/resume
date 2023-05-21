import Project from "./Project";

export default function Projects() {
	return (
		<section className="flex flex-col gap-2">
			<h3>PROJECTS</h3>
			<Project
				title="OShop"
				description="React e-commerce front-end."
				stack={["TypeScript", "React.js", "SASS"]}
				link="https://amedoeyes-oshop.vercel.app"
			/>
			<Project
				title="Sheets"
				description="Progressive web app for creating and managing roads survey spreadsheets."
				stack={["TypeScript", "React.js", "MUI"]}
				link="https://amedoeyes-sheets.vercel.app"
			/>
			<Project
				title="Spreadsheet"
				description="A simple react spreadsheet component library."
				stack={["TypeScript", "React.js"]}
				link="https://www.npmjs.com/package/@amedoeyes/spreadsheet"
			/>
			<Project
				title="numverify"
				description="Full-stack app that uses the Numverify API to verify phone numbers."
				stack={[
					"TypeScript",
					"React.js",
					"Node.js",
					"Express.js",
					"MongoDB",
				]}
				link="https://numverify.fly.dev"
			/>
			<Project
				title="Notes"
				description="Social media like app for sharing notes."
				stack={[
					"JavaScript",
					"React.js",
					"Node.js",
					"Express.js",
					"MongoDB",
				]}
				link="https://amedoeyes-notes.fly.dev"
			/>
		</section>
	);
}
