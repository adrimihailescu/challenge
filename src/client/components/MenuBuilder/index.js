import React from "react";
import ProductsMenu from "../ProductsMenu";
import MenuPreview from "../MenuPreview/MenuPreview";

//container for ProductsList and menuPreview
//receives information from App,state and props

const MenuBuilder = ({ menuBuilderItems, addItem, removeItem }) => {
	return (
		<div className="container menu-builder">
			<div className="row">
				<ProductsMenu addItem={addItem} />
				<MenuPreview
					removeItem={removeItem}
					menuBuilderItems={menuBuilderItems}
				/>
			</div>
		</div>
	);
};

export default MenuBuilder;
