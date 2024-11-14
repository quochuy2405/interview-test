import React from "react";
import Button from "../components/atoms/Button";
import ButtonGotoTop from "../components/atoms/ButtonGotoTop";
import HexCategoryItem from "../components/atoms/HexCategoryItem";
import { CupIcon, KnifeIcon } from "../components/atoms/Icons";
import PhotoCategoryItem from "../components/atoms/PhotoCategoryItem";
import BodyFatPercentageGraph from "../components/molecules/BodyFatPercentageGraph";
import DateAchievement from "../components/molecules/DateAchievement";
import { dataTops } from "../mocks/data";

const TopPage = () => {
	const [activeSection] = React.useState<keyof typeof dataTops>("morning");

	const sections = [
		{
			icon: <KnifeIcon />,
			label: "Morning",
		},
		{
			icon: <KnifeIcon />,
			label: "Lunch",
		},
		{
			icon: <KnifeIcon />,
			label: "Dinner",
		},
		{
			icon: <CupIcon />,
			label: "Snack",
		},
	];
	return (
		<div>
			<div className='flex h-[312px]'>
				<DateAchievement percentage={75} className='flex-1 h-full' />
				<BodyFatPercentageGraph className='flex-[2] h-full' />
			</div>
			<div className='w-4/5 lg:w-2/3 m-auto p-6 flex flex-col gap-6 mb-8 relative'>
				<div className='absolute -right-10 top-1/2 -mt-4'>
					<ButtonGotoTop />
				</div>
				<div className='flex justify-between gap-4 flex-wrap lg:px-20'>
					{sections.map((section) => (
						<HexCategoryItem key={section.label} icon={section.icon} label={section.label} />
					))}
				</div>
				<div className='grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-2'>
					{dataTops[activeSection].map((item) => (
						<PhotoCategoryItem label={item.title} thumbnail={item.thumbnail} key={item.title} />
					))}
				</div>
				<Button className='w-[296px] m-auto'>記録をもっと見る</Button>
			</div>
		</div>
	);
};

export default TopPage;
