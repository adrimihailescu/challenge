import React from "react";
import ProductsList from "./ProductsList/ProductsList";
import Search from "./Search/Search";

const ProductsMenu = () => {
	return (
		<div className="col-4">
			<Search />
			<ProductsList />
		</div>
	);
};

export default ProductsMenu;
