const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use( express.static(__dirname + '/public'));

app.get("/", (req,res) => {res.json("Working")});

app.listen(process.env.PORT || 3000, () => {
	console.log(`Running: PORT ${process.env.PORT}`);
});