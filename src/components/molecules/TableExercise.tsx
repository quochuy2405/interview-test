import React from "react";
import { dataExercise } from "../../mocks/data";

type TableExerciseItemProps = {
	title: string;
	kcal: number;
	minNumber: number;
};
const TableExerciseItem: React.FC<TableExerciseItemProps> = ({ kcal, minNumber, title }) => {
	return (
		<div className='flex gap-2 items-start w-full border-b border-dark-400 pb-2 mb-2'>
			<span className='w-1 h-1 rounded-full mt-1 bg-white'></span>
			<div className='flex flex-col gap-1 w-full'>
				<div className='flex justify-between gap-2'>
					<p className='text-light font-light leading-[22px]'>{title}</p>
					<p className='text-primary-300 font-normal text-lg leading-[22px]'>{minNumber} min</p>
				</div>
				<p className='text-primary-300 font-normal text-[15px] leading-[18px]'>{kcal}kcal</p>
			</div>
		</div>
	);
};
const TableExercise = () => {
	return (
		<div className='bg-dark-500 p-4'>
			<div className='gap-6 flex text-white'>
				<div className='font-normal'>
					<p className='text-[15px]'>MY </p>
					<p className='text-[15px]'>EXERCISE </p>
				</div>
				<p className='text-[22px] font-normal'>2021.05.21</p>
			</div>
			<div className='h-[192px] custom-scroll grid grid-cols-1 md:grid-cols-2 overflow-y-scroll py-1 w-full gap-x-10 pr-10'>
				{dataExercise.map((item) => (
					<TableExerciseItem key={item.title} {...item} />
				))}
			</div>
		</div>
	);
};

export default TableExercise;
