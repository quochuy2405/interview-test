import React, { useState } from "react";
import Logo from "../atoms/Logo";
import TabItem from "../atoms/TabItem";
import IconWithBadger from "../atoms/IconWithBadger";
import { ChallengeIcon, MemoIcon, MenuIcon, NotificationIcon } from "../atoms/Icons";
import { useLocation } from "react-router-dom";
import DrawerMenu from "./DrawerMenu";

const tabs = [
	{
		icon: <MemoIcon />,
		title: "自分の記録",
		router: "/",
	},
	{
		icon: <ChallengeIcon />,
		title: "チャレンジ",
		router: "/record",
	},
	{
		icon: <IconWithBadger count={3} icon={<NotificationIcon />} />,
		title: "お知らせ",
		router: "/recommend",
	},
];

const Header = () => {
	const location = useLocation();
	const pathname = location.pathname;
	const [isOpen, setIsOpen] = useState(false);
	return (
		<header className='w-screen h-16 bg-dark-500 flex items-center justify-center'>
			<div className='flex-[2] flex justify-center'>
				<Logo />
			</div>
			<div className='flex-[3] w-full flex gap-4 items-center justify-evenly'>
				{tabs.map((tab) => (
					<TabItem {...tab} key={tab.router} active={tab.router === pathname} />
				))}
				<div className="cursor-pointer" onClick={() => setIsOpen(true)}>
					<MenuIcon />
				</div>
			</div>
			<DrawerMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
		</header>
	);
};

export default Header;
