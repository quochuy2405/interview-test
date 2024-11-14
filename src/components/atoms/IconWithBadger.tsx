import React, { ReactNode } from 'react'

type IconWithBadgerProps = {
  icon: ReactNode;
  count:number
};

const IconWithBadger: React.FC<IconWithBadgerProps> = ({ icon, count }) => {
	return (
		<div className='relative w-8 h-8'>
			{icon}
			<span className='absolute top-0 -right-2 inline-flex items-center justify-center w-4 h-4 text-xs font-normal text-[10px] text-white bg-primary-500 rounded-full'>
				{count}
			</span>
		</div>
	);
};

export default IconWithBadger