import "./App.css";
// import Timer from "./components/Timer";
import Header from "./components/Header";
import BreakTimer from "./components/BreakTimer";
import Button from "./components/Button";

import WorkTimer from "./components/WorkTimer";
import { useState } from "react";

// const children = ({ remainingTime }) => {
// 	const minutes = Math.floor(remainingTime / 60);
// 	const seconds = remainingTime % 60;
// 	return `${minutes}m:${seconds}s`;
// };

function App() {
	const [workTimerShowing, setWorkTimerShowing] = useState(true);
	// const [backColor, setBackColor] = useState(true);

	function handleClick(e) {
		e.target.innerText === "work"
			? setWorkTimerShowing(true)
			: setWorkTimerShowing(false);
	}

	// function onChange(){
	// 	e.target.innerText === "work"
	// 	? setBackColor
	// }

	return (
		<div
			className="App"
			// style={{
			// 	backgroundColor: "blue",
			// }}
		>
			<Header />

			<div className="work-break">
				<Button className="timer-btn" title="work" handleClick={handleClick} />
				<Button className="timer-btn" title="break" handleClick={handleClick} />
			</div>
			{workTimerShowing && <WorkTimer />}
			{!workTimerShowing && <BreakTimer />}
			{/* <Tasks /> */}
		</div>
	);
}

export default App;
