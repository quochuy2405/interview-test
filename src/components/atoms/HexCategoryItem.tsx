import React, { PropsWithChildren, ReactNode } from "react";
import { useSearchParams } from "react-router-dom";

type HexCategoryItemProps = React.HTMLAttributes<HTMLDivElement> &
	PropsWithChildren & {
		icon: ReactNode;
		label: string;
		value: string;
	};

const HexCategoryItem: React.FC<HexCategoryItemProps> = ({ icon, label, value, ...props }) => {
	const [searchParams, setSearchParams] = useSearchParams();
	// Handle the click to update the search parameters
	const handleClick = () => {
		if (searchParams.get("filter") === value) {
			setSearchParams((prevParams) => {
				const newParams = new URLSearchParams(prevParams);
				newParams.delete("filter"); // Update or set the 'category' query parameter
				return newParams;
			});
			return;
		}
		setSearchParams((prevParams) => {
			const newParams = new URLSearchParams(prevParams);
			newParams.set("filter", value); // Update or set the 'category' query parameter
			return newParams;
		});
	};
	return (
		<div
			onClick={handleClick}
			className='relative cursor-pointer w-[136px] h-[136px] flex justify-center items-center'
			{...props}>
			<div className='absolute w-full h-full z-10 flex items-center justify-center flex-col p-2 top-0'>
				<div className='w-14 h-14'>{icon}</div>
				<p className='font-normal text-xl leading-5 text-white'>{label}</p>
			</div>
			<svg
				width='116'
				height='134'
				viewBox='0 0 116 134'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M0 33.5L58 0L116 33.5V100.5L58 134L0 100.5L0 33.5Z'
					fill='url(#paint0_linear_0_711)'
				/>
				<defs>
					<linearGradient
						id='paint0_linear_0_711'
						x1='25.9565'
						y1='165.202'
						x2='147.019'
						y2='118.302'
						gradientUnits='userSpaceOnUse'>
						<stop stop-color='#FFCC21' />
						<stop offset='1' stop-color='#FF963C' />
					</linearGradient>
				</defs>
			</svg>
		</div>
	);
};

export default HexCategoryItem;
