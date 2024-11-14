import React, { useEffect } from "react";
import Button from "../components/atoms/Button";
import ButtonGotoTop from "../components/atoms/ButtonGotoTop";
import HexCategoryItem from "../components/atoms/HexCategoryItem";
import { CupIcon, KnifeIcon } from "../components/atoms/Icons";
import PhotoCategoryItem from "../components/atoms/PhotoCategoryItem";
import BodyFatPercentageGraph from "../components/molecules/BodyFatPercentageGraph";
import DateAchievement from "../components/molecules/DateAchievement";
import { dataTops } from "../mocks/data";
import { useSearchParams } from "react-router-dom";
const sections = [
	{
		icon: <KnifeIcon />,
		label: "Morning",
		value: "morning",
	},
	{
		icon: <KnifeIcon />,
		label: "Lunch",
		value: "lunch",
	},
	{
		icon: <KnifeIcon />,
		label: "Dinner",
		value: "dinner",
	},
	{
		icon: <CupIcon />,
		label: "Snack",
		value: "snack",
	},
];

const TopPage = () => {
	const [data, setData] = React.useState(dataTops);
	const [searchParams] = useSearchParams();
	const [, setPage] = React.useState(1);

	useEffect(() => {
		const filter = searchParams.get("filter");
		if (filter) {
			const dataFilter = dataTops.filter((item) => item.category === filter);
			setData(dataFilter);
		} else {
			setData(dataTops);
		}
	}, [searchParams]);

	const handleShowMoreData = async () => {
		// Fetch next page of data
		const newData = dataTops;

		// Update state by appending new data
		if (newData.length > 0) {
			setData((prevData) => [...prevData, ...newData]);
			setPage((prevPage) => prevPage + 1); // Increment page number for the next request
		}
	};

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
						<HexCategoryItem key={section.label} {...section} />
					))}
				</div>
				<div className='grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-2'>
					{data.map((item, index) => (
						<PhotoCategoryItem label={item.title} thumbnail={item.thumbnail} key={index} />
					))}
				</div>
				<Button onClick={handleShowMoreData} className='w-[296px] m-auto'>
					記録をもっと見る
				</Button>
			</div>
		</div>
	);
};

export default TopPage;
