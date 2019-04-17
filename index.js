const fs = require("fs");
const path = require("path");
const markdownLinkExtractor = require('markdown-link-extractor');

//const pathfile = process.argv[2];

module.exports = {
  //function to verificated that user entered a path
  pathEntered : function (pathfile){
    if (pathfile != undefined){
      console.log("Ingresaste una dirección");
      return true;
    }else{
    console.log("No ingresaste dirección");
    return false
  }
},
  //funcion to verificated that path exists
  pathIsReal : function (pathfile){
    if (fs.existsSync(pathfile)){
      return true;
    }
    else {
      return false
  }
},
  //function to verificated that path is absolute
  /*pathIsAbsolute : function (pathfile){
    if(path.isAbsolute(pathfile)){
      return true;
    }
    else{
      return false
    }
  },*/
  
  //funcion to verificated that path is an directory or file
  pathIsDirectory : function (pathfile){
  if(fs.statSync(pathfile).isDirectory()){
    return true;
  } else {
    return false;
  }
},

//function to verificated that path is a file whith ext .md
  ExtNamePath : function (pathfile) {
    if (path.extname(pathfile) === ".md"){
      return true;
    } else {
      return false;
    }
  },

 //function to read file
  readFileMd : function () {
    let pathfile = "./prueba.md";
    let archivo = fs.readFileSync(pathfile, "utf-8");
      console.log (archivo);
      return true;
    },
  
 //function to extract links for files .md
  extractLinks : function (pathfile) {
    let markdown = module.exports.readFileMd(pathfile).toString();
    let links = markdownLinkExtractor(markdown);
    links.forEach(function(link) {
      console.log(link);
    })
  }  
  
  }
 
 
  console.log(module.exports.extractLinks());
 

