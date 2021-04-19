const fetch = require("node-fetch");

const fs = require("fs");
const path = require("path");
const url = "http://jsonplaceholder.typicode.com/posts";

// CREATE result/posts.json
// Create 'result' dir.
fs.mkdir(path.join(__dirname, "/result"), {}, err => {
  if (err) {
    throw Error
  } else {
      console.log(`> Folder created 😊\n> View folder here: ${path.join(__dirname, "result")}`);
      // Create 'posts.json' file in 'result' dir.
      fs.writeFile(path.join(__dirname, "/result", "/posts.json"), "", err => {
        if (err) {
          throw Error
        } else {
            console.log(`> File created 😊\n> View file here: ${path.join(__dirname, "result", "posts.json")}`);
        }
      });
  }
});

// Get all post
fetch(url)
  .then(res => res.json())
  .then(data => console.log(`😊 Posts successfuly fetched.\n`,data))
  .catch(error => 
    console.log(`😞 Couldn't fetch the data.`,
    `\n Error name: ${error.name}.`,
    `\n Error type: ${error.type}.`,
    `\n Error message: ${error.message}.`
    ));
