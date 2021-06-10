import React from "react";
import { useState } from "react";

const TestTimer = () => {
	const msToString = (ms) => {
		const minutes = Math.floor((ms / 1000 / 60) % 60);
		const seconds = Math.floor((ms / 1000) % 60);
		return [
			minutes.toString().padStart(2, "0"),
			seconds.toString().padStart(2, "0"),
		].join(":");
	};

	return (
		<div>
			<h1>{}</h1>
		</div>
	);
};

export default TestTimer;
