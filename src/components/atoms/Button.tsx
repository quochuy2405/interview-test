import React, { PropsWithChildren } from "react";
import clsx from "clsx";
type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & PropsWithChildren;

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
	return (
		<button
			className={clsx("bg-gradient-primary rounded-md text-white h-14 px-4 text-center", {
				[className as string]: className,
				'w-fit': !className,
			})}
			{...props}>
			{children}
		</button>
	);
};

export default Button;
