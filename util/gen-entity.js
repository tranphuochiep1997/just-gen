const fs = require('fs');
const genFileFromTemplate = require('./genFileFromTemplate');

module.exports = function genEntity(baseFolder, basePackageName, entityName) {
    const fileCategoryName = 'Entity';
    // Entity
    const entityDir = `${baseFolder}/entity`;
    const destinationFile = `${entityDir}/${entityName}Entity.java`;
    const templateFile = '../template/entity.java';
    // Tạo folder nếu chưa tồn tại
    if (!fs.existsSync(entityDir)) {
        fs.mkdirSync(entityDir);
    }
    genFileFromTemplate(fileCategoryName, templateFile, destinationFile, basePackageName, entityName);
}