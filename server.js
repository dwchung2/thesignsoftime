const http = require("http");

// load express and helper for post data
const express = require("express");
const bodyParser = require("body-parser");

const fs = require("fs");

const port = 8080;
const ip = "localhost"
const app = express();

// load existing json file
const messages = require("./messages.json");
const { UV_FS_O_FILEMAP } = require("constants");

// setup express server
app.use(express.static("."));
app.use(bodyParser.urlencoded({ extended: true }));

// handle GET requests to server:port
app.get("/", function (req, res) {
  console.log("GET");
  res.sendFile(messages);
});

// Handles POST request to server:port
app.post("/", (req, res) => {
  console.log("POST:", req.body);
  req.body ={
    id : messages.length,
    name : req.body.name,
    message : req.body.message,
  }

  console.log("POST:", req.body);
  // Handle the id field
  try {
    req.body.id = parseInt(req.body.id);
  } catch (e) {
    //console.warn("Id is not a number: ", id);
  }
  
  // update your json file in memory
  messages.push(req.body);
  
  // send the json to browser
  res.send(messages);

  const data = JSON.stringify(messages, null, 5);

  fs.writeFile('./messages.json', data,(err) => {
    if (err) {
      console.log("Error writing file: ", err);
    }
    console.log("JSON is saved(update).");
  });

});

// TODO: add loop to write JSON file (better to use a DB!)

app.listen(port, ip, ()=>{
  console.log(`Server is running at http://${ip}:${port}`);
}); // start the server

