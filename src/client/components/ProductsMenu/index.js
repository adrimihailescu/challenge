import React, { useState } from "react";
import ProductsList from "./ProductsList/ProductsList";
import Search from "./Search/Search";

const ProductsMenu = ({ addItem }) => {
	const [searchResult, setSearchResult] = useState();
	return (
		<div className="col-4">
			<Search setSearchResultData={setSearchResult} />
			<ProductsList searchResultData={searchResult} addItem={addItem} />
		</div>
	);
};

export default ProductsMenu;
