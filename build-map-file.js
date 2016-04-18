var fs = require("fs");
fs.readdir("repo", function(err, files) {
    if (err) return;
    var fileList = []
    files.forEach(function(f) {
        fileList.push(f);
    });
    fs.writeFileSync("file-map.json", JSON.stringify(fileList,null, 2));
    console.log("Done with written " + fileList.length + " files")
});
