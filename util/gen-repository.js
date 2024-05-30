const fs = require('fs');
const genFileFromTemplate = require('./genFileFromTemplate');

module.exports = function genRepository(baseFolder, basePackageName, entityName) {
    const fileCategoryName = 'Repository';
    // Repository
    const repositoryDir = `${baseFolder}/repository`;
    const destinationFile = `${repositoryDir}/${entityName}Repository.java`;
    const templateFile = './template/repository.java';
    // Tạo folder nếu chưa tồn tại
    if (!fs.existsSync(repositoryDir)) {
        fs.mkdirSync(repositoryDir);
    }
    genFileFromTemplate(fileCategoryName, templateFile, destinationFile, basePackageName, entityName);
}