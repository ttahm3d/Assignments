const fs = require("fs");

fs.writeFile(
  "created-file.txt",
  "This content is being written to file",
  (err) => {
    if (err) throw new Error("Error in writing to file");
    else console.log("Successfully written to file");
  }
);
