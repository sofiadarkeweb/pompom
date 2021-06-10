import React from "react";
import Timer from "react-compound-timer";
import { useState } from "react";
import soundfile from "../soundfile2.wav";

const Alarm = new Audio(soundfile);

const WorkTimer = () => {
	const [colon, setColon] = useState(":");

	function changeColon() {
		setColon("|");
	}

	return (
		<Timer
			formatValue={(value) => `${value < 10 ? `0${value}` : value}`}
			initialTime={1500000}
			startImmediately={false}
			direction="backward"
			timeToUpdate={0}
			checkpoints={[
				{
					time: 0,
					callback: () => Alarm.play(),
				},
				{
					time: 0,
					callback: () => changeColon(),
				},
			]}
			// onStop={() => test()}
		>
			{({ start, stop, reset }) => (
				<React.Fragment>
					<div className="the-time" id="the-time-id">
						<Timer.Minutes /*formatValue={(value) => `${value}`}*/ />
						<span ref="colon" style={{ color: "orange" }}>
							{colon}
						</span>
						<Timer.Seconds />
					</div>
					{/* {test()} */}
					{/* <h2>{name}</h2> */}

					<br />
					<div>
						<button className="action-btns" onClick={start}>
							Start
						</button>
						<button className="action-btns" onClick={stop}>
							Stop
						</button>

						<button className="action-btns" onClick={reset}>
							Reset
						</button>
					</div>
				</React.Fragment>
			)}
		</Timer>
	);
};

export default WorkTimer;
