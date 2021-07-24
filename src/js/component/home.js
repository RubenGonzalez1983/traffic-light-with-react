import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<container>
			<container className="container">
				<div className="pole"></div>
			</container>
			<container className="container">
				<div className="blackBox">
					<div className="redLight"></div>
					<div className="yellowLight"></div>
					<div className="greenLight"></div>
				</div>
			</container>
		</container>
	);
}
