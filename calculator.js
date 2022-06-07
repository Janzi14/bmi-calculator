const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000)

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post("/bmi", function (req, res) {
    let weight = Number(req.body.weight);
    let height = Number(req.body.height);
    let bmi = weight / (height * height);
    res.send("<h2>Your BMI is " + bmi + "</h2>");
})