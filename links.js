const fs = require('fs');
//const path = require ('path');
  
// Module to read files 
module.exports = (pathfile, options) => {
    return new Promise((resolve, reject)=> {
      // Leer el archivo
      fs.readFile(pathfile, function(err, data){
        if (err){
          return reject(err);
        }
        resolve(data.toString());
      });
    });
   }; 