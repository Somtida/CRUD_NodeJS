'use strict'
const path = require('path');
const fs = require('fs');
const crud = require('./crudUtil.js');

var [command,...data] = process.argv.slice(2);
// console.log('args: ',[command,data]);


// var funcs = {
//   add: function(data){
//     console.log("add: ",data);
//   },
//   remove: function(data){
//     console.log("remove: ",data);
//   }
// }
// funcs[command](data);

crud[command](data);
