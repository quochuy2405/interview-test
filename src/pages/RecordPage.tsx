import Button from "../components/atoms/Button";
import DiaryItem from "../components/atoms/DiaryItem";
import RecordBodyItem from "../components/atoms/RecordBodyItem";
import BodyRecordChart from "../components/molecules/BodyRecordChart";
import TableExercise from "../components/molecules/TableExercise";
import { dataDiaries } from "../mocks/data";
import MyRecommend1 from "./../assets/images/MyRecommend-1.jpg";
import MyRecommend2 from "./../assets/images/MyRecommend-2.jpg";
import MyRecommend3 from "./../assets/images/MyRecommend-3.jpg";

const RecordPage = () => {
	const sections = [
		{
			thumbnail: MyRecommend1,
			title: "BODY RECORD",
			description: "自分のカラダの記録",
		},
		{
			thumbnail: MyRecommend2,
			title: "MY EXERCISE",
			description: "自分の運動の記録",
		},
		{
			thumbnail: MyRecommend3,
			title: "MY DIARY",
			description: "自分の日記",
		},
	];

	return (
		<div>
			<div className='flex px-6 lg:w-2/3 m-auto py-12 flex-col gap-4'>
				<div className='flex flex-col md:flex-row justify-between gap-4'>
					{sections.map((section) => (
						<RecordBodyItem
							key={section.title}
							description={section.description}
							thumbnail={section.thumbnail}
							title={section.title}
						/>
					))}
				</div>
				<BodyRecordChart />
				<TableExercise />
				<div className='flex flex-col gap-1'>
					<h2>MY DIARY</h2>
					<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  flex-wrap gap-2'>
						{dataDiaries.map((item) => (
							<DiaryItem key={item.title} {...item} />
						))}
					</div>
				</div>
				<Button className='w-[296px] m-auto'>記録をもっと見る</Button>
			</div>
		</div>
	);
};

export default RecordPage;
