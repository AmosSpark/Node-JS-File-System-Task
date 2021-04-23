const fetch = require("node-fetch");

const fs = require("fs");
const path = require("path");
// const url = "http://jsonplaceholder.typicode.com/posts/";
const url = "https://web.archive.org/web/20210414154459/http://jsonplaceholder.typicode.com/posts/";

// CHECK IF ./result dir already exist
const dirName = "./result";

if (fs.existsSync(dirName)) {
  console.log(`> 😊 ./result directory already exist.\n> View file here: ${path.join(__dirname, "result", "posts.json")}`);
} else {
// IF ./result dir does not exist, create 'result' dir.
fs.mkdir(path.join(__dirname, "/result"), {}, err => {
  if (err) {
    throw Error
  } else {
      console.log(`> 😊 Folder created.\n> View folder here: ${path.join(__dirname, "result")}`);
      // Create 'posts.json' file in 'result' dir. './result/posts.json'
      fs.writeFile(path.join(__dirname, "/result", "/posts.json"), "", err => {
        if (err) {
          throw Error
        } else {
            console.log(`> 😊 File created\n> View file here: ${path.join(__dirname, "result", "posts.json")}`);
        }
      });
  }
});
}

// FETCH POSTS FROM http://jsonplaceholder.typicode.com/posts AND WRITE TO result/posts.json
// Get all post
fetch(url)
  .then(res => res.json())
  .then(data => {
    // convert data object to JSON, assign to posts 
    const posts = JSON.stringify(data);

    // write posts to result/posts.json
    fs.writeFile(path.join(__dirname, "result", "posts.json"), posts, err => {
      if (err) {
        throw Error
      } else {
        console.log(`> 😊 Posts successfuly fetched.\n> View posts here: ${path.join(__dirname, "result", "posts.json")}`)
      }
    })
  })
  .catch(error => 
    console.log(`> 😞 Couldn't fetch the data.`,
    `\n Error name: ${error.name}.`,
    `\n Error type: ${error.type}.`,
    `\n Error message: ${error.message}.`
    ));
