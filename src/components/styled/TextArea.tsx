type TextAreaProps = {
	label: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function TextArea({
	label,
	className = "",
	...rest
}: TextAreaProps) {
	return (
		<div className={`relative ${className}`}>
			<textarea
				className="peer w-full appearance-none rounded-[1rem] border-2 border-primary border-opacity-25 bg-secondary p-2 outline-none transition-[border-color] duration-200 focus:border-opacity-100"
				placeholder=" "
				{...rest}
			/>
			<label
				className="transition-[top, opacity, translate] pointer-events-none absolute -top-2 left-2 z-10 origin-[0] scale-75 transform rounded-full bg-secondary px-1 text-sm text-primary text-opacity-50 duration-200 peer-placeholder-shown:top-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:bg-transparent peer-focus:-top-2 peer-focus:scale-75 peer-focus:bg-secondary peer-focus:text-opacity-100"
				htmlFor={rest.id}
			>
				{label}
			</label>
		</div>
	);
}
