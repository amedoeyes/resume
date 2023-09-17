import { forwardRef } from "react";

type ButtonProps = {
	variant?: "outlined" | "filled";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className = "", variant = "filled", children, ...rest }, ref) => {
		const variantClassName = {
			filled: "bg-primary text-secondary hover:bg-opacity-75 hover:text-opacity-75 active:bg-opacity-100 active:text-opacity-100",
			outlined:
				"border border-1 border-primary text-primary hover:border-opacity-75 hover:text-opacity-75 active:bg-opacity-100 active:text-opacity-100",
		};

		return (
			<button
				ref={ref}
				className={`flex justify-center gap-1 rounded-md p-2 text-sm uppercase outline-none duration-300 ${variantClassName[variant]} ${className}`}
				{...rest}
			>
				{children}
			</button>
		);
	},
);

Button.displayName = "Button";
export default Button;
