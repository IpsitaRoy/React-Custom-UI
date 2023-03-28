var express = require('express');
const compression = require("compression");
const bodyParser = require("body-parser");
const cors = require("cors");
const subscriptionHandler = require('./subscriptionHandler');

var app = express();

app.use(cors());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/hook", (req, res) => {
  subscriptionHandler.sendPushNotification(req, res);
  res.status(200).end() // Responding is important
});

app.post("/subscription", subscriptionHandler.handlePushNotificationSubscription);

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});
