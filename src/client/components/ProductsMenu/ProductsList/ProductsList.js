import React, { useState, useEffect } from "react";
import MenuItem from "../../MenuItem/MenuItem";
import { fetchData } from "../../../helpers";

const ProductsList = ({ searchResultData }) => {
	const [items, setItems] = useState();

	useEffect(() => {
		const getData = async () => {
			const data = await fetchData();
			setItems(data.items);
		};
		getData();
	}, []);

	const outputData = searchResultData ? searchResultData : items;
	return (
		<ul className="item-picker">
			{outputData &&
				outputData.map((item) => {
					return <MenuItem />;
				})}
		</ul>
	);
};

export default ProductsList;
