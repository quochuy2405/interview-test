import React from "react";
import ChartRecordPage from "../atoms/ChartRecordPage";
import clsx from "clsx";

type BodyRecordChartProps = React.HTMLAttributes<HTMLDivElement>;

const BodyRecordChart: React.FC<BodyRecordChartProps> = () => {
	return (
		<div className='bg-dark-500 p-4'>
			<div className='gap-6 flex text-white'>
				<div className='font-normal'>
					<p className='text-[15px]'>BODY </p>
					<p className='text-[15px]'>RECORD </p>
				</div>
				<p className='text-[22px] font-normal'>2021.05.21</p>
			</div>
			<div>
				<ChartRecordPage />
			</div>
			<div className="flex gap-3">
				<ButtonFilter active={false} label='日' />
				<ButtonFilter active={false} label='週' />
				<ButtonFilter active={false} label='月' />
				<ButtonFilter active={true} label='年' />
			</div>
		</div>
	);
};

export default BodyRecordChart;

type ButtonFilterProps = React.HTMLAttributes<HTMLDivElement> & {
	active: boolean;
	label: string;
};

const ButtonFilter: React.FC<ButtonFilterProps> = ({ active, label, ...props }) => {
	return (
		<div
			className={clsx(
				"w-14 text-[15px] font-light leading-[22px] h-6 rounded-full flex items-center justify-center",
				{
					"bg-primary-300 text-light": active,
					"bg-white text-primary-300 ": !active,
				}
			)}
			{...props}>
			{label}
		</div>
	);
};
