import React from "react";

import { CountdownCircleTimer } from "react-countdown-circle-timer";
import WorkTimer from "./WorkTimer";

const CountdownAnimation = ({
	id = 1,
	timer = 20,
	animate = true,
	children,
}) => {
	return (
		<div>
			<CountdownCircleTimer
				key={id}
				isPlaying={animate}
				duration={100}
				colors={[
					["#004777", 0.33],
					["#F7B801", 0.33],
					["#A30000", 0.33],
				]}
				strokeWidth={12}
				size={220}
				trailColor="#00000"
				// onComplete={() => {
				// 	stopTimer();
				// }}
			>
				{children}
			</CountdownCircleTimer>
		</div>
	);
};

export default CountdownAnimation;
