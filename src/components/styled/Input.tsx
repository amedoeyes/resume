type InputProps = {
	label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ label, className = "", ...rest }: InputProps) {
	return (
		<div className={`relative ${className}`}>
			<input
				className="peer w-full appearance-none rounded-md border-2 border-primary border-opacity-25 bg-secondary p-2 outline-none transition-[border-color] duration-200 hover:border-opacity-50 focus:border-opacity-100"
				placeholder=" "
				{...rest}
			/>
			<label
				className="transition-[top, opacity, translate] pointer-events-none absolute left-2 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform rounded-full bg-secondary px-1 text-sm text-primary text-opacity-50 duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:bg-transparent peer-hover:text-opacity-75 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:bg-secondary peer-focus:text-opacity-100"
				htmlFor={rest.id}
			>
				{label}
			</label>
		</div>
	);
}
