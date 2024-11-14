import React from "react";
type PhotoCategoryItemProps = React.HTMLAttributes<HTMLDivElement> & {
	label: string;
	thumbnail: string;
};

const PhotoCategoryItem: React.FC<PhotoCategoryItemProps> = ({ label, thumbnail, ...props }) => {
	return (
		<div className='w-full h-[234px]  relative' {...props}>
			<img src={thumbnail} alt={label} className='w-full h-full object-cover' />
			<p className='absolute z-10 bg-primary-300 text-white p-2 py-1 bottom-0 font-normal text-[15px] leading-[18px]'>{label}</p>
		</div>
	);
};

export default PhotoCategoryItem;
