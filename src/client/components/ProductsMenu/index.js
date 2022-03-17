import React, { useState } from "react";
import ProductsList from "./ProductsList/ProductsList";
import Search from "./Search/Search";

const ProductsMenu = () => {
	const [searchResult, setSearchResult] = useState();
	return (
		<div className="col-4">
			<Search setSearchResultData={setSearchResult} />
			<ProductsList searchResultData={searchResult} />
		</div>
	);
};

export default ProductsMenu;
