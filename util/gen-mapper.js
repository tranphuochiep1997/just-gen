const fs = require('fs');
const genFileFromTemplate = require('./genFileFromTemplate');

module.exports = function genMapper(baseFolder, basePackageName, entityName) {
    const fileCategoryName = 'Mapper';
    // Mapper
    const mapperDir = `${baseFolder}/mapper`;
    const destinationFile = `${mapperDir}/${entityName}Mapper.java`;
    const templateFile = './template/mapper.java';
    // Tạo folder nếu chưa tồn tại
    if (!fs.existsSync(mapperDir)) {
        fs.mkdirSync(mapperDir);
    }
    genFileFromTemplate(fileCategoryName, templateFile, destinationFile, basePackageName, entityName);
}