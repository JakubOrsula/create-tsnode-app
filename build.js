const fs = require("fs");
const path = require("path");


const files = fs.readdirSync('rsrc')
let index = fs.readFileSync('index.js', {encoding: 'utf-8', flag: 'r'})
console.log(index)
let newContents = []
for (const file of files) {
  let str = fs.readFileSync(path.join('rsrc', file), {encoding: 'utf-8', flag: 'r'}).replace(/\n/g, "\\n").replace(/'/g, "\\'")
  console.log(index.indexOf(`REPLACE${file}`))
  index = index.replace(`REPLACE${file}`, str)
}
fs.writeFileSync('indexProd.js', index)

