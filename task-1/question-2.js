const rl = require("readline");
const fs = require("fs");
const rs = fs.createReadStream("./sample.csv");
const ws = fs.createWriteStream("output.txt");

const rli = rl.createInterface({
  input: rs,
  output: ws
});

rli.on("line", line => {
  ws.write(line, "UTF8");
  ws.write("\r\n", "UTF8");
});
