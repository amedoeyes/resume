export default function Button({
	className = "",
	children,
	...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<button
			className={`rounded-full bg-primary p-2 uppercase text-secondary outline-none transition-[background-color] duration-300 hover:bg-opacity-75 active:bg-opacity-100 ${className}`}
			{...rest}
		>
			{children}
		</button>
	);
}
