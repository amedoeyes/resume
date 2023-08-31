import { useEffect, useRef } from "react";

type TextAreaProps = {
	label: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function TextArea({
	label,
	className = "",
	...rest
}: TextAreaProps) {
	const textAreaRef = useRef<HTMLTextAreaElement>(null);

	useEffect(() => {
		const textArea = textAreaRef.current;
		if (textArea) {
			textArea.style.height = "auto";
			textArea.style.height = `${textArea.scrollHeight}px`;
		}
	});

	return (
		<div className={`relative flex ${className}`}>
			<textarea
				ref={textAreaRef}
				className="peer w-full resize-none appearance-none overflow-hidden rounded-md border-2 border-primary border-opacity-25 bg-secondary p-2 outline-none transition-[border-color] duration-200 hover:border-opacity-50 focus:border-opacity-100"
				placeholder=" "
				onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
					e.target.style.height = "auto";
					e.target.style.height = `${e.target.scrollHeight}px`;

					rest.onInput?.(e);
				}}
				{...rest}
			/>
			<label
				className="transition-[top, opacity] pointer-events-none absolute -top-2 left-2 z-10 origin-[0] scale-75 transform rounded-full bg-secondary px-1 text-sm text-primary text-opacity-50 duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:bg-transparent peer-hover:text-opacity-75 peer-focus:-top-2 peer-focus:scale-75 peer-focus:bg-secondary peer-focus:text-opacity-100"
				htmlFor={rest.id}
			>
				{label}
			</label>
		</div>
	);
}
