// const readline = require('readline');
// const fs = require('fs');

// const readInterface = readline.createInterface({
//     input: fs.createReadStream('./question-1.js')
// });

// readInterface.on('line', function(line) {
//     console.log(line);
// });

var rl = require('readline');
var fs = require('fs');
var rs = fs.createReadStream('./question-1.js');
var ws = fs.createWriteStream('output.txt');

var rli = rl.createInterface({
    input: rs,
    output: ws
})

rli.on('line',(line)=>{
    ws.write(line,'UTF8');
    ws.write('\r\n','UTF8');
})