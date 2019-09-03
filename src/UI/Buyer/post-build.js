const path = require('path')
const fs = require('fs')
const util = require('util')
const moment = require('moment')

console.log("post build running...");
fs.readFile('./dist/base-buyer-server/main.js', 'utf8', (err, data) => {
    if (err) throw err;
    var result = data.replace(/angular-tree-component\/dist\/components/g, 'angular-tree-component/dist/angular-tree-component.umd.js')
    console.log(data);
})