const express = require("express");
const app = express();

app.use(express.json());

let info = {
	name: "Mennatalla Khougha",
	gender: "Female",
	github_url: "https://github.com/Mennatalla-Khougha",
};

app.get("/", (req, res) => {
	res.json(info);
});


app.listen(3000, () => {
	console.log("Server running on http://localhost:3000");
});
