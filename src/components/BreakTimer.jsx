import React, { useState } from "react";
import Timer from "react-compound-timer";

import soundfile from "../soundfilebreak.wav";

const Alarm = new Audio(soundfile);

const BreakTimer = () => {
	const [colon, setColon] = useState(":");

	function changeColon() {
		setColon("|");
	}

	return (
		<Timer
			formatValue={(value) => `${value < 10 ? `0${value}` : value}`}
			initialTime={300000}
			startImmediately={false}
			direction="backward"
			onStart={() => console.log("onStart hook")}
			checkpoints={[
				{
					time: 0,
					callback: () => Alarm.play(),
					// callback: () => alert("Checkpoint A"),
				},
				{
					time: 0,
					callback: () => changeColon(),
					// callback: () => alert("Checkpoint A"),
				},
			]}

			// onStop = {}
		>
			{({ start, stop, reset }) => (
				<React.Fragment>
					<div className="the-time">
						{/* <h2>Break</h2> */}
						<Timer.Minutes />
						<span style={{ color: "teal" }}>{colon}</span>
						<Timer.Seconds />
					</div>
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

export default BreakTimer;
