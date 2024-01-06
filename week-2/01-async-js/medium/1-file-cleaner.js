const fs = require("fs");

let cleanedData = "";
fs.readFile("uncleanfile.txt", "utf-8", (err, data) => {
  if (err) throw new Error("Unable to read file");
  console.log("before cleaning =>\n", data);
  cleanedData = data
    .trim()
    .split(" ")
    .filter((w) => w.trim() !== "")
    .join(" ");

  fs.writeFile("uncleanfile.txt", cleanedData, { flag: "w" }, (err) => {
    if (err) throw new Error("Error in writing file");
  });
  console.log("after cleaning =>\n", cleanedData);
});

/**
 * replace below content for testing in uncleanfile.txt
 *   hello     world    my    name   is       raman
 */
