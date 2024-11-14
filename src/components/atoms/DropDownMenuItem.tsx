import clsx from "clsx";
import React, { PropsWithChildren } from "react";
type DropDownMenuItemProps = React.HTMLAttributes<HTMLDivElement> & PropsWithChildren;

const DropDownMenuItem: React.FC<DropDownMenuItemProps> = ({ children, className, ...props }) => {
	return (
		<div
			className={clsx("bg-dark-400 text-white h-14 w-full p-4 text-left", {
				[className as string]: className,
			})}
			{...props}>
			{children}
		</div>
	);
};

export default DropDownMenuItem;
