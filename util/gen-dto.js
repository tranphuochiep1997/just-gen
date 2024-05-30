const fs = require('fs');
const genFileFromTemplate = require('./genFileFromTemplate');

module.exports = function genDto(baseFolder, basePackageName, entityName) {
    const fileCategoryName = 'Dto';
    // Dto
    const dtoDir = `${baseFolder}/dto`;
    const destinationFile = `${dtoDir}/${entityName}Dto.java`;
    const templateFile = './template/dto.java';
    // Tạo folder nếu chưa tồn tại
    if (!fs.existsSync(dtoDir)) {
        fs.mkdirSync(dtoDir);
    }
    genFileFromTemplate(fileCategoryName, templateFile, destinationFile, basePackageName, entityName);
}