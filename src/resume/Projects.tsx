import Project from "../components/Project";
import Section from "../components/Section";

export default function Projects() {
	return (
		<Section title="Projects">
			<Project
				title="Sheets"
				description="Progressive web app that calculates and displays roads survey spreadsheets."
				stack={["TypeScript", "Next.js", "Redux", "MUI"]}
				link="https://amedoeyes-sheets.vercel.app"
			/>
			<Project
				title="OShop"
				description="React e-commerce front-end."
				stack={["TypeScript", "React.js", "Redux", "SASS", "Auth0"]}
				link="https://amedoeyes-oshop.vercel.app"
			/>
			<Project
				title="numverify"
				description="Web app that uses the Numverify API to verify and store phone numbers."
				stack={["TypeScript", "React.js", "Redux", "Node.js", "Express.js", "MongoDB"]}
				link="https://numverify.fly.dev"
			/>
			<Project
				title="Notes"
				description="Social media like app for sharing notes."
				stack={["JavaScript", "React.js", "Node.js", "Express.js", "MongoDB"]}
				link="https://amedoeyes-notes.fly.dev"
			/>
			<Project
				title="Users API"
				description="CRUD Users API with roles and permissions."
				stack={["Laravel"]}
				link="https://github.com/amedoeyes/users-api-laravel"
			/>
			<Project
				title="Spreadsheet"
				description="React spreadsheet component library."
				stack={["TypeScript", "React.js"]}
				link="https://npmjs.com/package/@amedoeyes/spreadsheet"
			/>
			<Project
				title="Fish farming in lake Burullus"
				description="Interactive map that displays different elements affecting fish farming in lake Burullus."
				stack={["TypeScript", "ArcGIS API"]}
				link="https://amedoeyes.github.io/fish-farming-in-lake-burullus"
			/>
		</Section>
	);
}
