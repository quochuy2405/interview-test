import React from "react";
import Button from "../components/atoms/Button";
import ButtonGotoTop from "../components/atoms/ButtonGotoTop";
import HealthCategoryItem from "../components/atoms/HealthCategoryItem";
import RecommendSectionItem from "../components/atoms/RecommendSectionItem";
import { dataHealthCategories } from "../mocks/data";
const sections = [
	{
		title: "RECOMMENDED COLUMN",
		description: "オススメ",
		hashtags: ["オススメ"],
	},
	{
		title: "RECOMMENDED DIET",
		description: "ダイエット",
	},
	{
		title: "RECOMMENDED BEAUTY",
		description: "美容",
	},
	{
		title: "RECOMMENDED HEALTH",
		description: "健康",
	},
];

const RecommendPage = () => {
	const [data, setData] = React.useState(dataHealthCategories);
	const [, setPage] = React.useState(1);

	const handleShowMoreData = async () => {
		// Fetch next page of data
		const newData = dataHealthCategories;

		// Update state by appending new data
		if (newData.length > 0) {
			setData((prevData) => [...prevData, ...newData]);
			setPage((prevPage) => prevPage + 1); // Increment page number for the next request
		}
	};

	return (
		<div>
			<div className='flex px-6 lg:w-2/3 m-auto py-12 flex-col gap-4'>
				<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  justify-between gap-4'>
					{sections.map((section) => (
						<RecommendSectionItem
							key={section.title}
							description={section.description}
							title={section.title}
						/>
					))}
				</div>

				<div className='flex flex-col gap-1 relative'>
					<div className='absolute -right-20 bottom-0 -mt-4'>
						<ButtonGotoTop />
					</div>
					<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
						{data.map((item) => (
							<HealthCategoryItem key={item.date} {...item} />
						))}
					</div>
				</div>
				<Button onClick={handleShowMoreData} className='w-[296px] m-auto'>
					記録をもっと見る
				</Button>
			</div>
		</div>
	);
};

export default RecommendPage;
