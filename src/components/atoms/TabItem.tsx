import clsx from "clsx";
import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
type TabItemProps = {
	title: string;
	icon: ReactNode;
	router: string;
	active: boolean;
};

const TabItem: React.FC<TabItemProps> = ({ icon, router, title, active, ...props }) => {
	return (
		<Link to={router} className='flex gap-2 items-center' {...props}>
			<div className='w-8 h-8'>{icon}</div>
			<p
				className={clsx("font-light  text-base leading-[23px]", {
					"text-white": !active,
					"text-primary-400": active,
				})}>
				{title}
			</p>
		</Link>
	);
};

export default TabItem;
