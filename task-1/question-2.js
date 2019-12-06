var rl = require('readline');
var fs = require('fs');
var rs = fs.createReadStream('./sample.csv');
var ws = fs.createWriteStream('output.txt');

var rli = rl.createInterface({
    input: rs,
    output: ws
})

rli.on('line',(line)=>{
    ws.write(line,'UTF8');
    ws.write('\r\n','UTF8');
})