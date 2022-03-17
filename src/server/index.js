const express = require("express");
const items = require("./items");
const cors = require("cors");

const app = express();

const corsOptions = {
	origin: "http://localhost:3000",
	optionSuccessStatus: 200,
};

const port = process.env.PORT || 8080;

app.use(express.static("dist"));

app.use(cors(corsOptions));

app.get("/api/items", (req, res) => {
	const { searchString } = req.query;

	// search items by name

	if (searchString) {
		const searchResults = items.filter((item) =>
			item.name.toLowerCase().includes(searchString.toLowerCase())
		);

		return res.send({ searchResults });
	}

	return res.send({ items });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
