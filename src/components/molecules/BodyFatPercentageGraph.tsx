import clsx from "clsx";
import React from "react";
import ChartTopPage from "../atoms/ChartTopPage";
type BodyFatPercentageGraphProps = React.HTMLAttributes<HTMLDivElement>;

const BodyFatPercentageGraph: React.FC<BodyFatPercentageGraphProps> = ({ className, ...props }) => {
	return (
		<div
			className={clsx("bg-dark-600", {
				[className as string]: className,
			})}
			{...props}>
			<ChartTopPage />
		</div>
	);
};

export default BodyFatPercentageGraph;
