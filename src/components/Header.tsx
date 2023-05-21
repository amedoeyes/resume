export default function Header() {
	return (
		<header className="flex items-center justify-between">
			<div>
				<h1>AHMED ABOUELEYOUN</h1>
				<div className="flex gap-1">
					<a href="mailto:ahmed.m.aboueleyoun@gmail.com">
						ahmed.m.aboueleyoun@gmail.com
					</a>
					<span className="opacity-75">|</span>
					<a href="tel:201002403588">+20 100 240 3588</a>
				</div>
			</div>
			<div className="flex flex-col gap-1 text-sm">
				<a href="https://github.com/amedoeyes">github.com/amedoeyes</a>
				<a href="https://linkedin.com/in/ahmed-aboueleyoun">
					linkedin.com/in/ahmed-aboueleyoun
				</a>
			</div>
		</header>
	);
}
