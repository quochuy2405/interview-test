import React from "react";
type HealthCategoryItemProps = React.HTMLAttributes<HTMLDivElement> & {
	description: string;
	date: string;
	thumbnail: string;
	hashtags?: string[];
};

const HealthCategoryItem: React.FC<HealthCategoryItemProps> = ({
	date,
	description,
	thumbnail,
	hashtags = [],
	...props
}) => {
	return (
		<div className='w-full relative flex flex-col gap-2' {...props}>
			<div className='w-full h-[144px] relative'>
				<img src={thumbnail} alt={description} className='w-full h-full' />
				<p className='absolute z-10 bg-primary-300 text-white px-2 bottom-0 font-normal text-[15px] leading-[30px]'>
					{date}
				</p>
			</div>
			<p className='font-light text-[15px] leading-[22px] line-clamp-2 w-full text-wrap'>
				{description}
			</p>
			<div className='flex gap-2'>
				{hashtags.map((hashtag) => (
					<p className='text-primary-400 text-xs leading-[22px] '>{hashtag}</p>
				))}
			</div>
		</div>
	);
};

export default HealthCategoryItem;
