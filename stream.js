var fs = require("fs");
//insert a readable stream
var readerStream = fs.createReadStream("input.txt");
//insert writable stream
var writerStream = fs.createWriteStream("output.txt");
//Pipe the read and write operations
//read input.txt and write data to output.txt
readerStream.pipe(writerStream);
console.log("Program ended");
