const path = require('path');
const os = require('os');
const fs = require('fs');


fs.readdir('./',(err,files)=>{
  console.log(err);
  console.log(files)
})


console.log("memory",os.freemem())
console.log("memory",os.totalmem()) 
// const res=path.parse(__filename)

// console.log("res",res);

 