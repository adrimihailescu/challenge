import React, { useState, useEffect } from "react";

const MenuSummary = ({ menuBuilderItems }) => {
	const [diets, setDiets] = useState();

	const dietSummary = () => {
		const result = {};
		menuBuilderItems.forEach((el) => {
			const diets = el.dietaries;
			for (const i in diets) {
				if (result[diets[i]] === undefined) {
					result[diets[i]] = 1;
				} else {
					result[diets[i]]++;
				}
			}
		});
		console.log(result);
		return result;
	};

	useEffect(() => {
		setDiets(dietSummary());
	}, [menuBuilderItems]);

	return (
		<div className="menu-summary">
			<div className="container">
				<div className="row">
					<div className="col-6 menu-summary-left">
						{menuBuilderItems.length > 0 && (
							<span>{`${menuBuilderItems.length} ${
								menuBuilderItems.length !== 1 ? "items" : "item"
							}`}</span>
						)}
					</div>
					<div className="col-6 menu-summary-right">
						{diets &&
							Object.keys(diets).map((key) => (
								<span key={`diet-type-${key}`}>
									{`${diets[key]} x`}
									<span className="dietary">{key}</span>
								</span>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MenuSummary;
