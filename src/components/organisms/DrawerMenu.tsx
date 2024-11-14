import React from "react";
import DropDownMenuItem from "../atoms/DropDownMenuItem";
import { XIcon } from "../atoms/Icons";
import clsx from "clsx";
const menus = [
	{
		label: "自分の記録",
	},
	{
		label: "体重グラフ",
	},
	{
		label: "選択中のコース",
	},
	{
		label: "コラム一覧",
	},
	{
		label: "設定",
	},
];

type DrawerMenuProps = {
	isOpen: boolean;
	onClose: () => void;
};

const DrawerMenu: React.FC<DrawerMenuProps> = ({ isOpen, onClose }) => {
	return (
		<div
			className={clsx(
				"fixed z-20 right-0 top-20 w-[280px] transition-transform duration-300 ease-in-out", // Add transition properties here
				{
					"translate-x-0": isOpen, // Open position
					"translate-x-full": !isOpen, // Closed position
				}
			)}>
			<div
				onClick={onClose}
				className='w-8 h-8 flex items-center justify-center cursor-pointer bg-dark-500 ml-auto'>
				<XIcon />
			</div>
			{menus.map((item, index) => (
				<DropDownMenuItem className={index > 0 ? "border-t-2 border-dark-500" : ""}>
					{item.label}
				</DropDownMenuItem>
			))}
		</div>
	);
};

export default DrawerMenu;
