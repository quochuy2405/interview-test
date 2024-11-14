import React, { PropsWithChildren, ReactNode } from "react";

type HexCategoryItemProps = React.HTMLAttributes<HTMLDivElement> &
	PropsWithChildren & {
		icon: ReactNode;
		label: string;
	};

const HexCategoryItem: React.FC<HexCategoryItemProps> = ({ icon, label, ...props }) => {
	return (
		<div className='relative cursor-pointer w-[136px] h-[136px] flex justify-center items-center' {...props}>
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
