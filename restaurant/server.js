var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var reservations = [];
var waitList = [];

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/tables", function (req, res) {
    var tables = {
        reservations: reservations,
        waitList: waitList
    }
    res.json(tables)
})

app.get("/api/:reservations?", function (req, res) {
    var chosen = req.params.reservations;

    if (chosen) {
        console.log(chosen);
        for (var i = 0; i < reservations.length; i += 1) {
            if (chosen === reservations[i].routeName) {
                res.json(reservations[i]);
                return;
            }
        }
        return res.send("No reservations found");
    }
    return res.json(reservations);
});

app.post("/api/new", function (req, res) {
    var newReservation = req.body;
    console.log(newReservation);
    if (reservations.length >= 5) {
        waitList.push(newReservation)
    } else {
        reservations.push(newReservation);
        console.log(true);
    }
    res.json(newReservation);
});
app.listen(PORT, function () {
    console.log(`App is listening on PORT ${PORT}`)
});