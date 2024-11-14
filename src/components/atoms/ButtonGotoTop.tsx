import React, { PropsWithChildren } from "react";

type ButtonGotoTopProps = React.HTMLAttributes<HTMLButtonElement> & PropsWithChildren;

const ButtonGotoTop: React.FC<ButtonGotoTopProps> = ({ ...props }) => {
	
  const handleGoToTop = () => {
		// Scroll to the top of the page
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	};

	return (
		<button
			className='border border-dark-400 w-12 h-12 rounded-full flex items-center justify-center fixed bottom-5 right-5' // Add positioning to make it fixed
			onClick={handleGoToTop} // Attach click handler
			{...props}>
			<svg
				width='16'
				height='10'
				viewBox='0 0 16 10'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M14.5852 9.04198L8.00017 2.65788L1.41513 9.04198L0.53894 8.19253L8.00018 0.958984L15.4614 8.19253L14.5852 9.04198Z'
					fill='#777777'
				/>
			</svg>
		</button>
	);
};

export default ButtonGotoTop;
