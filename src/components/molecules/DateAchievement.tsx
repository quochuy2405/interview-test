import React from "react";
import Thumbnail from "../../assets/images/d01.jpg";
import clsx from "clsx";
type DateAchievementProps = React.HTMLAttributes<HTMLDivElement> & {
	percentage: number;
};

const DateAchievement: React.FC<DateAchievementProps> = ({
	className,
	percentage = 75,
	...props
}) => {
	const radius = 85; // Bán kính của vòng tròn
	const strokeWidth = 4; // Độ dày của đường vẽ
	const circumference = 2 * Math.PI * radius; // Chu vi của vòng tròn

	// Tính toán giá trị stroke-dashoffset từ phần trăm
	const offset = circumference - (percentage / 100) * circumference;

	return (
		<div
			className={clsx("relative", {
				[className as string]: className,
			})}
			{...props}>
			<img src={Thumbnail} alt='Thumbnail' className='h-full w-full object-cover' />
			<div className='absolute  top-0 flex items-center justify-center w-full h-full'>
				<p className='flex items-end gap-2 text-white absolute'>
					<span
						className='text-lg font-normal leading-[22px]'
						style={{ textShadow: "#FF963C 1px 0 10px" }}>
						05/21
					</span>
					<span
						className='text-[25px] font-normal leading-[30px]'
						style={{ textShadow: "#FF963C 1px 0 10px" }}>
						75%
					</span>
				</p>
				<svg
					style={{ transform: "rotate(-90deg)" }}
					width='181'
					height='181'
					viewBox='0 0 181 181'
					xmlns='http://www.w3.org/2000/svg'>
					<circle
						cx='90.5'
						cy='90.5'
						r={radius}
						stroke='white'
						strokeWidth={strokeWidth}
						fill='none'
						strokeDasharray={circumference}
						strokeDashoffset={offset}
						style={{
							transition: "stroke-dashoffset 0.5s ease",
							textShadow: "#FF963C 1px 0 10px",
						}}
					/>
				</svg>
			</div>
		</div>
	);
};

export default DateAchievement;
