const linksMd = require ('./links.js');
const pathfile = process.argv[2];
const path = require ('path');
const readFileResult = linksMd(pathfile, null);
const fs = require('fs');

//function to verificated that user entered a path
function pathEntered (pathfile){
    if (pathfile != undefined){
      console.log("Ingresaste una dirección");
      return true;
    }else{
    console.log("No ingresaste dirección");
    return false
  }
};

//funcion to verificated that path exists
function pathIsReal (pathfile){
    if (fs.existsSync(pathfile)){
      return true;
    }
    else {
      return false
  }
};

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
function pathIsDirectory (pathfile){
  if(fs.statSync(pathfile).isDirectory()){
    return true;
  } else {
    return false;
  }
};

//function to verificated that path is a file whith ext .md
function extNamePath (pathfile) {
    if (path.extname(pathfile) === ".md"){
      return true;
    } else {
      return false;
    }
  };

 //function to read file Syncrona
 /*readFileMd : function () {
    let pathfile = "./prueba.md";
    let archivo = fs.readFileSync(pathfile, "utf-8");
      console.log (archivo);
      return true;
    },
  */ 
 
 //function to read file Asyncrona    
function readFileMd (pathfile, options){
      return new Promise ((resolve, reject) => {
        fs.readFile (pathfile, function (err, data){
          if (err) {
            return reject (err);
          }
          resolve (data.toString());
        });
      });
    };

// result of reading file
readFileResult.then(
  (data)=> { // On Success
   console.log("Found links:");
   urlify(data);
  },
  (err)=> { // On Error
      console.error(err);
  }
)
  
//Función que extre los links y los imprime en arreglo de objetos
function urlify(data) {
  const mdLinkRgEx = /\[(.+?)\]\(.+?\)/g;
  const mdLinkRgEx2 = /\[(.+?)\]\((.+?)\)/;
  let allLinks = data.match(mdLinkRgEx);
  let htmlLinks = [];
  for (var x in allLinks) {
    var grpdDta = mdLinkRgEx2.exec(allLinks[x]);
    var grupoData = {
      href: grpdDta[2],
      text: grpdDta[1],
      file: pathfile
    }; 
    htmlLinks.push(grupoData);   
  }
  console.log(htmlLinks.length);
  console.log(htmlLinks);
  return (htmlLinks);
 
};

//console.log(module.exports.getLinks().parseLinks("./README.md"));



module.exports = {
  pathEntered = pathEntered,
  pathIsReal,
  pathIsDirectory, 
  extNamePath,
  readFileMd, 
}
 

