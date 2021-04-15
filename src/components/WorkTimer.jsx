import React from "react";
import Timer from "react-compound-timer";
// import useSound from "use-sound";
// import boopSfx from "../../sounds/boop.mp3";
import { useState } from "react";

import soundfile from "../soundfile_2.wav";

const Alarm = new Audio(soundfile);

const WorkTimer = () => {
	// const [startBtnShowing, setStartBtnShowing] = useState(true);
	// function handleClick(e) {
	// 	e.target.innerText === "start"
	// 		? setStartBtnShowing(true)
	// 		: setStartBtnShowing(false);
	// }

	// const test = () => {
	// 	button.innerText === "start"
	// 	? button.innertext = "red"
	// 	: target.innertext.style = "black"
	// };

	// const zero = () => {
	// 	if (<Timer.Seconds /> <= 9) return <span>0</span>;
	// };

	const zero = () => {
		<Timer.Seconds /> <= 9 ? <span>0</span> : <span>X</span>;
	};

	return (
		<Timer
			initialTime={15000}
			startImmediately={false}
			direction="backward"
			// onStart={() => Alarm.play()}
			// onStop={BoopButton}
			checkpoints={[
				{
					time: 0,
					callback: () => Alarm.play(),
				},
				// {
				// 	time: 0,
				// 	callback: () => test(),
				// },
			]}
			// onStop = {}
		>
			{({ start, stop, reset }) => (
				<React.Fragment>
					<div className="the-time" id="the-time-id">
						<Timer.Minutes />
						<span>:</span>
						{zero}
						<Timer.Seconds />
					</div>

					<br />
					<div>
						<button
							className="action-btns"
							onClick={start}
							// handleClick={handleClick}
						>
							Start
						</button>
						<button
							className="action-btns"
							onClick={stop}
							// handleClick={handleClick}
						>
							Stop
						</button>

						<button className="action-btns" onClick={reset}>
							Reset
						</button>
						{/* {startBtnShowing && (
							<button
								className="action-btns"
								onClick={start}
								handleClick={handleClick}
							>
								Start
							</button>
						)}
						{!startBtnShowing && (
							<button
								className="action-btns"
								onClick={stop}
								handleClick={handleClick}
							>
								Stop
							</button>
						)} */}
					</div>
				</React.Fragment>
			)}
		</Timer>
	);
};

export default WorkTimer;
