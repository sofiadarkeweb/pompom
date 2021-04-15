import React from "react";
import Timer from "react-compound-timer";

import soundfile from "../soundfilebreak.wav";

const Alarm = new Audio(soundfile);

// import { useState } from "react";

const BreakTimer = () => {
	return (
		<Timer
			initialTime={3000}
			startImmediately={false}
			direction="backward"
			onStart={() => console.log("onStart hook")}
			checkpoints={[
				{
					time: 0,
					callback: () => Alarm.play(),
					// callback: () => alert("Checkpoint A"),
				},
			]}

			// onStop = {}
		>
			{({ start, resume, pause, stop, reset }) => (
				<React.Fragment>
					<div className="the-time">
						{/* <h2>Break</h2> */}
						<Timer.Minutes />
						<span>:</span>
						<Timer.Seconds />
					</div>
					{/* <div>{timerState}</div> */}
					<br />
					<div>
						<button className="action-btns" onClick={start}>
							Start
						</button>
						{/* <button onClick={pause}>Pause</button> */}
						{/* <button onClick={resume}>Resume</button> */}
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
