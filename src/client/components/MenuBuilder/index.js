import React from "react";
import ProductsMenu from "../ProductsMenu";
import MenuPreview from "../MenuPreview/MenuPreview";

const MenuBuilder = () => {
	return (
		<div className="container menu-builder">
			<div className="row">
				<ProductsMenu />
				<MenuPreview />
			</div>
		</div>
	);
};

export default MenuBuilder;
