'use strict'

const path = require('path');
const fs = require('fs');

var dataPath = path.join(__dirname, 'data.json');

exports.get = () => {
  getArray(function(err,array){
    if(err) return console.log('err: ',err);
    console.log("array: ",array);
  });
}

exports.add = data =>{
  console.log("add: ", data);

  //let arr = getArray();  //not work in Asyn

  getArray(function(err,array){
    if(err) return console.log('err: ',err);
    // console.log("array: ",array);
    array.push(data[0]);

    writeArray(array,function(err){
      console.log("done!");
    });
  });

}
exports.remove = data =>{
  console.log("remove: ", data);
  getArray(function(err,array){
    if(err) return console.log('err: ',err);
    var index = array.indexOf(data[0]);
    // console.log("array: ",array);
    array.splice(index,1);

    writeArray(array,function(err){
      console.log("done!");
    });
  });
}

exports.edit = data =>{
  console.log("edit: ", data);
  getArray(function(err,array){
    if(err) return console.log('err: ',err);
    var index = array.indexOf(data[0]);
    // console.log("array: ",array);
    array[index] = data[1];

    writeArray(array,function(err){
      console.log("done!");
    });
  });
}

function writeArray(array,cb){
  fs.writeFile(dataPath, JSON.stringify(array), err => {
    // if(err){
    //   cb(err);
    // } else{
    //   cb(null);
    // }
    cb(err);
  });
}


function getArray(cb){

  fs.readFile(dataPath, (err,data)=>{
    if(err) return cb(err);
    try{
      var arr =  JSON.parse(data);
    }catch(e){
      var arr = [];
    }
    cb(null,arr);
  });

  //Synchronous
  // let data = fs.readFile(dataPath);
  //
  // try{
  //   var arr =  JSON.parse(data);
  // }catch(e){
  //   var arr = [];
  // }
  //
  //   return arr;

}
