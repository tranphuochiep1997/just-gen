const fs = require('fs');
const genFileFromTemplate = require('./genFileFromTemplate');

module.exports = function genService(baseFolder, basePackageName, entityName) {
    const fileCategoryName = 'Service';
    // Service
    const serviceDir = `${baseFolder}/service`;
    const destinationFile = `${serviceDir}/${entityName}Service.java`;
    const templateFile = './template/service.java';
    // Tạo folder nếu chưa tồn tại
    if (!fs.existsSync(serviceDir)) {
        fs.mkdirSync(serviceDir);
    }
    genFileFromTemplate(fileCategoryName, templateFile, destinationFile, basePackageName, entityName);
}