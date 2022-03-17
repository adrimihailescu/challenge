import React, { useState, useEffect } from "react";
import { useDebounce } from "../../../hooks";
import { fetchData } from "../../../helpers";

const Search = ({ setSearchResultData }) => {
	const [searchTerm, setSearchTerm] = useState();

	//useDebounce - to avoid too many api calls, the request will be sent once the user finishes typing
	const debouncedSearchTerm = useDebounce(searchTerm, 500);

	const onCHangeHandler = (event) => {
		setSearchTerm(event.target.value);
	};

	useEffect(() => {
		if (debouncedSearchTerm) {
			const getData = async () => {
				const data = await fetchData(searchTerm);
				setSearchResultData(data.searchResults);
			};
			getData();
		} else {
			setSearchResultData();
		}
	}, [debouncedSearchTerm]);
	return (
		<div className="filters">
			<input
				className="form-control"
				placeholder="Name"
				onChange={onCHangeHandler}
			/>
		</div>
	);
};

export default Search;
