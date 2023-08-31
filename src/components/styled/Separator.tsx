type SeparatorProps = {
	variant?: "vertical" | "horizontal";
} & React.ComponentProps<"div">;

export default function Separator(props: SeparatorProps) {
	const variants = {
		vertical: "w-[1px] h-full",
		horizontal: "h-[1px] w-full",
	};

	return (
		<div
			{...props}
			className={`rounded-full bg-primary bg-opacity-25 ${
				variants[props.variant || "horizontal"]
			} ${props.className || ""}`}
		></div>
	);
}
