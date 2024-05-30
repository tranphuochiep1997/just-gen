const fs = require('fs');
const genFileFromTemplate = require('./genFileFromTemplate');

module.exports = function genController(baseFolder, basePackageName, entityName) {
    const fileCategoryName = 'Controller';
    // Controller
    const controllerDir = `${baseFolder}/controller`;
    const destinationFile = `${controllerDir}/${entityName}Controller.java`;
    const templateFile = '../template/controller.java';
    // Tạo folder nếu chưa tồn tại
    if (!fs.existsSync(controllerDir)) {
        fs.mkdirSync(controllerDir, { recursive: true });
    }
    genFileFromTemplate(fileCategoryName, templateFile, destinationFile, basePackageName, entityName);
}