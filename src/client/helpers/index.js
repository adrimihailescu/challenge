const fetchData = async (searchTerm) => {
	let url = searchTerm
		? `http://localhost:8080/api/items?searchString=${searchTerm}`
		: "http://localhost:8080/api/items";

	return await fetch(url)
		.then((response) => response.json())
		.then((data) => data)
		.catch((error) => {
			console.error(error);
			return [];
		});
};

export { fetchData };
