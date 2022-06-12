const fs = require("fs");

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/index.html", fileContent, err => {
            //if there's an error, reject the promise and send the error to catch
            if (err) {
                reject (err);
                //return out of the function here to make sure the doesn't execut resolve
                return;
            }

            // if all went well, resolve the promise
            resolve({
                ok: true,
                message: "File Created!"
            });
        });
    });
};



const copyFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.copyFile("./src/style.css", "./dist/style.css", err => {
            //if there's an error, reject the promise and send the error to catch
            if (err) {
                reject (err);
                //return out of the function here to make sure the doesn't execut resolve
                return;
            }

            // if all went well, resolve the promise
            resolve({
                ok: true,
                message: "File Copied Successfully!"
            });
        });
    });
};


module.exports = {
    writeFile,
    copyFile
};