const fs = require('fs');
const genFileFromTemplate = require('./genFileFromTemplate');

module.exports = function genServiceImpl(baseFolder, basePackageName, entityName) {
    const fileCategoryName = 'ServiceImpl';
    // ServiceImpl
    const serviceImplDir = `${baseFolder}/service/impl`;
    const destinationFile = `${serviceImplDir}/${entityName}ServiceImpl.java`;
    const templateFile = '../template/serviceImpl.java';
    // Tạo folder nếu chưa tồn tại
    if (!fs.existsSync(serviceImplDir)) {
        fs.mkdirSync(serviceImplDir);
    }
    genFileFromTemplate(fileCategoryName, templateFile, destinationFile, basePackageName, entityName);
}