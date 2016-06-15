'use strict'
const path = require('path');
const fs = require('fs');


// var [node, main, ...args] = process.argv;
// console.log("files: ",args);

var dirs = process.argv.slice(2);

dirs.forEach(dir =>{
  let dirPath = path.join(__dirname, dir);
  // fs.mkdir(dirPath, err => {
  //
  // });
  fs.mkdirSync(dirPath);
});

console.log("done!");

var filepath = path.join(__dirname,'script');
console.log("filepath: ",filepath);

var fileLists = []
fs.readdir(filepath,(err,files)=>{
  if(err) return console.log("Error: ",err);
    // console.log("files: ",files);
  files.forEach(file => {
    var fileListpath = path.join(filepath,file);
    require(fileListpath);
  });
});
