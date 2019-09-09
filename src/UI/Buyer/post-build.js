const fs = require('fs')

console.log("post build running...");

//need to replace certain files in main.js
fs.readFile('./dist/base-buyer-server/main.js', 'utf8', (err, data) => {
    if (err) throw err;
    fs.writeFile('./dist/base-buyer-server/main_old.js', data, 'utf8', function(err) {
        if (err) throw err;
    })
    var result = data.replace(/"(.\/node_modules\/)?angular-tree-component\/dist\/\w+\/\w+.+\w"/g, '"./node_modules/angular-tree-component/dist/angular-tree-component.umd.js"')
        .replace(/"angular-tree-component\/dist\/angular-tree-component"/g, '"angular-tree-component/dist/angular-tree-component.umd"')
        .replace(/"mobx-angular\/dist\/directives\/\w.+(js)?"/g, '"./node_modules/mobx-angular/dist/mobx-angular.umd.js"');

    //only replace directives?
    // var result = data.replace(/"(.\/node_modules\/)?angular-tree-component\/dist\/directives\/\w+.+\w"/g, '"./node_modules/angular-tree-component/dist/angular-tree-component.umd.js"')
    //      .replace(/"mobx-angular\/dist\/directives\/w.+\js"/g, '"./node_modules/mobx-angular/dist/mobx-angular.umd.js"');

    fs.writeFile('./dist/base-buyer-server/main.js', result, 'utf8', function(err) {
        if (err) throw err;
    })
})