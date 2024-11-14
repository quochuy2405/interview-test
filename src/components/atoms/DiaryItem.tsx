import React from "react";
type DiaryItemProps = React.HTMLAttributes<HTMLDivElement> & {
	description: string;
	title: string;
  date: string;
  time:string
};

const DiaryItem: React.FC<DiaryItemProps> = ({ title, description, date, time, ...props }) => {
	return (
		<div className='border border-[#707070] w-full p-4 flex flex-col gap-2' {...props}>
			<div className='flex flex-col gap-1 text-lg leading-[22px] font-normal'>
				<p>{date}</p>
				<p>{time}</p>
			</div>
			<div className="text-xs leading-[17px] font-light">
				<p>{title}</p>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default DiaryItem;
