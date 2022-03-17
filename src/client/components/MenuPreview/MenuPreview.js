import React from "react";
import MenuItem from "../MenuItem/MenuItem";

const MenuPreview = ({ menuBuilderItems, removeItem }) => {
	return (
		<div className="col-8">
			<h2>MenuPreview</h2>
			<ul className="menu-preview">
				{menuBuilderItems &&
					menuBuilderItems.map((menuItem) => (
						<MenuItem
							key={`menu-${menuItem.id}-${Math.random()}`}
							item={menuItem}
							removeItem={removeItem}
						/>
					))}
			</ul>
		</div>
	);
};

export default MenuPreview;
