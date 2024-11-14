import React from "react";

type RecommendSectionItemProps = React.HTMLAttributes<HTMLDivElement> & {
	description: string;
	title: string;
};

const RecommendSectionItem: React.FC<RecommendSectionItemProps> = ({
	title,
	description,
	...props
}) => {
	return (
		<div className='flex flex-col p-4 h-36 justify-center items-center gap-2 bg-dark-600 w-full' {...props}>
			<h2 className='text-primary-300 text-[22px] text-center leading-[27px] font-normal'> {title}</h2>
			<span className='w-14 h-[1px] bg-white'></span>
			<p className='text-light font-light text-lg leading-[26px]'> {description}</p>
		</div>
	);
};

export default RecommendSectionItem;
