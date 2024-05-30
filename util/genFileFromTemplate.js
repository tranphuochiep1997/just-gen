const fs = require('fs');
const path = require('path');
const replaceTemplate = require('./replaceTemplateContent');

module.exports = function genFileFromTemplate(fileCategoryName, templateFilePath, destinationFilePath, basePackageName, entityName) {
    // Đọc file
    fs.stat(destinationFilePath, function(err, stat) {
        if (err == null) {
        console.log(`${fileCategoryName} already exists, do nothing!`);
        } else if (err.code === 'ENOENT') {
            // file does not exist
            // Read the template
            fs.readFile(path.resolve(__dirname, templateFilePath), 'utf-8', (err, data) => {
                if (err) {
                    console.error(err);
                    return;
                }
                const fileContent = replaceTemplate(data, basePackageName, entityName);
                fs.writeFile(destinationFilePath, fileContent, (err) => {
                    if (err) console.log(err);
                    console.log(`Successfully create ${fileCategoryName}`);
                });
            })
        } else {
        console.log('Some other error: ', err.code);
        }
    });
}