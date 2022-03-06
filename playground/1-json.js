const fs = require("fs");
const { json } = require("stream/consumers");

const dataBuffer = fs.readFileSync("1-json.json")
const dataString = dataBuffer.toString()
const data = JSON.parse(dataString)

data.name = "Germán";
data.age = 30;

console.log(data)

const changedData = JSON.stringify(data)

fs.writeFileSync("1-json.json", changedData)