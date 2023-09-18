import { useTheme } from "next-themes";

export default function SelectTheme() {
	const theme = useTheme();

	const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		theme.setTheme(e.target.value);
	};

	return (
		<div className="flex items-center justify-between">
			<p className="select-none text-lg">Select Theme</p>

			<select
				className="rounded-md border border-primary bg-secondary p-2"
				value={theme.theme}
				onChange={handleSelect}
			>
				<option value="light">Light</option>
				<option value="dark">Dark</option>
				<option value="system">System</option>
			</select>
		</div>
	);
}
