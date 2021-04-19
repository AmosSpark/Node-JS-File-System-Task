# Node-JS-File-System-Task

This is the second task for the Node JS track on Zuri training. It is a script that fetches posts from [jsonplaceholder](http://jsonplaceholder.typicode.com/posts) and writes the JSON data to `/posts.json` file in the` /result` directory using `node-fetch` npm package and `Fetch API`.

## How To Use This Script

> clone this [repo](https://github.com/AmosSpark/Node-JS-File-System-Task.git) <br>
> Install dependencies by using `npm install` from CLI <br>
> run `npm run fetch`or `node index.js` from CLI <br>

## Outcome

> On running `npm run fetch` or `node index.js`, the script will do the following:

- [x] Create `result` dir in the root.
- [x] Create `posts.json` file in `result` dir.
- [x] Fetch posts from [jsonplaceholder](http://jsonplaceholder.typicode.com/posts).
- [x] Write JSON data fetched from [jsonplaceholder](http://jsonplaceholder.typicode.com/posts) to `result/posts.json` path.
- [x] Console log error messages if unable to create path or fetch data.
- [x] console log success messaages with paths to `result/posts.json` if able to create path and fetch data.
