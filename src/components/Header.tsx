import { Fragment } from "react";

type HeaderProps = {
	fistName: string;
	lastName: string;
	email: string;
	phone: string;
	links?: string[];
};

export default function Header({ fistName, lastName, email, phone, links }: HeaderProps) {
	return (
		<header className="flex flex-col items-center gap-1 mb-4">
			<h1 className="text-4xl font-thin tracking-wider text-center uppercase">
				{fistName} {lastName}
			</h1>

			<div className="flex flex-wrap justify-center gap-1 text-xs">
				<a href={`mailto:${email}`}>{email}</a>
				<span>-</span>
				<a href={`tel:${phone}`}>{phone}</a>
				<span>-</span>
				{links &&
					links.map((link, index) => (
						<Fragment key={link}>
							<a href={link}>{link.replace("https://", "")}</a>

							{index === links.length - 1 ? "" : <span>-</span>}
						</Fragment>
					))}
			</div>
		</header>
	);
}
