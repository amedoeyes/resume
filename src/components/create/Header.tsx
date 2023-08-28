import Link from "next/link";

export default function Header() {
	return (
		<header className="sticky top-0 z-20 flex h-14 w-full items-center justify-between border-b border-b-primary border-opacity-25 bg-secondary p-4">
			<h2 className="select-none text-2xl font-medium">
				<Link href="/">Résumé</Link>
			</h2>
		</header>
	);
}
