import React, { useState } from "react";
import "./App.css";
import MenuBuilder from "./components/MenuBuilder";
import MenuSummary from "./components/MenuSummary/MenuSummary";

export default () => {
	const [menuBuilderItems, setMenuBuilderItems] = useState([]);

	//adding items from the left-hand side to the right in MenuPreview

	const addToMenuHandler = (item) => {
		const isNew =
			menuBuilderItems.find((el) => el.id === item.id) === undefined;
		console.log("itExists", isNew);
		if (isNew) {
			setMenuBuilderItems((menuBuilderItems) => [...menuBuilderItems, item]);
		}
	};
	const removeFromMenuHandler = (id) => {
		const removedMenuBuilderItems = menuBuilderItems.filter(
			(item) => item.id !== id
		);
		setMenuBuilderItems(removedMenuBuilderItems);
	};

	return (
		<div className="wrapper">
			<MenuSummary menuBuilderItems={menuBuilderItems} />
			<MenuBuilder
				menuBuilderItems={menuBuilderItems}
				addItem={addToMenuHandler}
				removeItem={removeFromMenuHandler}
			/>
		</div>
	);
};
