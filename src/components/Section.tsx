type SectionProps = {
	title: string;
	children: React.ReactNode;
};

export default function Section({ title, children }: SectionProps) {
	return (
		<section>
			<h3 className="mb-2 text-sm border-b-2 border-black border-opacity-50 first-letter:text-lg">
				{title.toUpperCase()}
			</h3>
			<div className="flex flex-col gap-2 pl-4">{children}</div>
		</section>
	);
}
