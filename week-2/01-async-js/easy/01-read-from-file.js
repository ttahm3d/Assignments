const fs = require("fs");

fs.readFile("demo-file.txt", "utf-8", (err, data) => {
  console.log(data);
});
