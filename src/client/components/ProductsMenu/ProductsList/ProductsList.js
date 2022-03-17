import React, { useState, useEffect } from "react";
import MenuItem from "../../MenuItem/MenuItem";
import { fetchData } from "../../../helpers";

const ProductsList = ({ searchResultData, addItem }) => {
	const [items, setItems] = useState();

	useEffect(() => {
		const getData = async () => {
			const data = await fetchData();
			setItems(data.items);
		};
		getData();
	}, []);

	//will display the items or only the result of search
	const outputData = searchResultData ? searchResultData : items;

	return (
		<ul className="item-picker">
			{outputData &&
				outputData.map((item) => {
					return (
						<MenuItem key={`item-${item.id}`} item={item} addItem={addItem} />
					);
				})}
		</ul>
	);
};

export default ProductsList;
