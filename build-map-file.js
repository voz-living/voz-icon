var fs = require("fs");
fs.readdir("../voz-icon-repo", function(err, files) {
    if (err) return;
    var fileList = []
    files.forEach(function(f) {
        if(/^(\.git|LICENSE)/.test(f)) return;
        fileList.push(f);
        console.log("Adding: "+f);
    });
    fs.writeFileSync("file-map.json", JSON.stringify(fileList,null, 2));
    console.log("Done with written " + fileList.length + " files")
});
