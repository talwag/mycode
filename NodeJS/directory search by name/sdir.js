var fs = require('fs');
var strToSearch = process.argv[2];

if (process.argv.length <= 2) {
    console.log('Please enter a folder name to search');
    process.exit(-1);
}
function searchDir(searchPath) {
    fs.readdir(searchPath, function (err, dirs) {
        if (!dirs) return;
        dirs.forEach(function (dir) {
            fs.lstat(searchPath + '\\' + dir, function (err, stats) {
                if (!err && stats.isDirectory()) {
                    if (dir.indexOf(strToSearch) > -1) {
                        console.log('FOUND:', searchPath + '\\' + dir);
                    }
                    searchDir(searchPath + '\\' + dir);
                }
            });
        });
    });
}
searchDir('C:');