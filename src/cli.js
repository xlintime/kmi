const path=require('path')
const chalk=require('chalk')
const parser=require('yargs-parser')

const argv=parser(process.argv.slice(2));

console.log("argv-->",argv)

console.log("__dirname-->",__dirname);
let cwd = process.cwd();
console.log("cwd-->11",cwd)
if (process.env.APP_ROOT) {
  // avoid repeat cwd path;
  if (!path.basenameisAbsolute(process.env.APP_ROOT)) {
    return path.join(cwd, process.env.APP_ROOT);
  }
  return process.env.APP_ROOT;
}
console.log("cwd-->22",cwd)