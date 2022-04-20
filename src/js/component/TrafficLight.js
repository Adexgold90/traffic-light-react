import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/index.css";

//create your first component
const TrafficLight = () => {
	const [Selected, setSelected] = useState("red");
	function lightCycle() {}
	return (
		<div>
			<div className="traffic">
				<div
					onClick={() => setSelected("red")}
					className={
						"light red" + (Selected === "red" ? " glow" : "")
					}></div>
				<div
					onClick={() => setSelected("yellow")}
					className={
						"light yellow" + (Selected === "yellow" ? " glow" : "")
					}></div>
				<div
					onClick={() => setSelected("green")}
					className={
						"light green" + (Selected === "green" ? " glow" : "")
					}></div>
			</div>

			<div>
				<button>Cycle!</button>
				<button>Add purple!</button>
			</div>
		</div>
	);
};

export default TrafficLight;
