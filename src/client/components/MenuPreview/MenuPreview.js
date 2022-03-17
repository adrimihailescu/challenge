import React from "react";
import MenuItem from "../MenuItem/MenuItem";

//MenuPreview will display the items added from ProductsList
//MenuItem is a reusable component which will receive only the 'removeItem'

const MenuPreview = ({ menuBuilderItems, removeItem }) => {
	return (
		<div className="col-8">
			<h2>Preview Menu</h2>
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
