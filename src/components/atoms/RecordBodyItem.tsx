import React from "react";
type RecordBodyItemProps = React.HTMLAttributes<HTMLDivElement> & {
	description: string;
	title: string;
	thumbnail: string;
};

const RecordBodyItem: React.FC<RecordBodyItemProps> = ({ title, description, thumbnail, ...props }) => {
	return (
		<div className='w-full aspect-square p-6 bg-primary-300' {...props}>
			<div className='relative w-full h-full'>
				<img src={thumbnail} alt={title} className='w-full h-full grayscale object-cover object-center' />
				<div className='bg-black opacity-35 w-full h-full absolute top-0 '></div>
				<div className='absolute w-full h-full bottom-0 flex flex-col justify-center items-center gap-2'>
					<h2 className='font-normal text-[25px] text-primary-300 leading-[30px]'>{title}</h2>
					<p className='bg-primary-400 text-white px-2 py-1 text-sm'>{description}</p>
				</div>
			</div>
		</div>
	);
};

export default RecordBodyItem;
