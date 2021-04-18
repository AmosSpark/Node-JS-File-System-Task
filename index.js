const fetch = require("node-fetch");

const url = "http://jsonplaceholder.typicode.com/posts";

fetch(url)
  .then(res => res.json())
  .then(data => console.log(`😊 Posts successfuly fetched.\n`,data))
  .catch(error => 
    console.log(`😞 Couldn't fetch the data.`,
    `\n Error name: ${error.name}.`,
    `\n Error type: ${error.type}.`,
    `\n Error message: ${error.message}.`
    ));
