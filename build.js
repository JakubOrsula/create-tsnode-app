const fs = require("fs");
const path = require("path");


const files = fs.readdirSync('rsrc')
let index = fs.readFileSync('index.js', {encoding: 'utf-8', flag: 'r'})
for (const file of files) {
  const str = fs.readFileSync(path.join('rsrc', file), {encoding: 'utf-8', flag: 'r'}).replace(/\n/g, "\\n").replace(/'/g, "\\'")
  index = index.replace(`REPLACE${file}`, str)
}
fs.writeFileSync('indexProd.js', index)

