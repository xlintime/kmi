#!/user/bin/env node

const resolveCwd=require('resolve-cwd');
const {name,bin}=require('../package.json');
console.log("name-->",name);
console.log("bin-->",bin);

const localCLI=resolveCwd.silent(`${name}/${bin['umi']}`);
console.log("localCLI-->",localCLI);

require('../src/cli');;