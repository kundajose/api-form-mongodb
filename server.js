const { response } = require("express");
const express = require("express");
require("dotenv").config();
const app = express();
// const PORT = 7500;
const cors = require("cors");
app.use(cors());
app.use(express.json());

const MongoClient = require("mongodb").MongoClient;

const connectionString = process.env.DB_STRING;
MongoClient.connect(connectionString)
  .then((client) => {
    console.log("Connected to Database");
    const db = client.db("star-trek-api");
    const infoCollection = db.collection("alien-info");

    app.get("/", (request, response) => {
      response.sendFile(__dirname + "/index.html");
    });

    app.get("/api/apply", (request, response) => {
      infoCollection
        .find({})
        .toArray()
        .then((results) => {
          console.log(results);
          return response.json(results);
        })
        .catch((error) => console.error(error));
    });

    app.get("/api/apply/:alienName", (request, response) => {
      const aliensName = request.params.alienName.toLowerCase();
      infoCollection
        .find({ name: aliensName })
        .toArray()
        .then((results) => {
          console.log(results);
          return response.json(results[0]);
        })
        .catch((error) => console.error(error));
    });
  })
  .catch((error) => console.error(error));

app.listen(process.env.PORT || PORT, () => {
  console.log("Server is running.");
});
