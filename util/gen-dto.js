const fs = require('fs');
const genFileFromTemplate = require('./genFileFromTemplate');
const convertOracleDataTypeToJava = require('./convertOracleDataTypeToJava');
const { snakeToCamel } = require('./string-util');

module.exports = function genDto(baseFolder, basePackageName, entityName, tableName, tableColumns) {
    const fileCategoryName = 'Dto';
    // Dto
    const dtoDir = `${baseFolder}/dto`;
    const destinationFile = `${dtoDir}/${entityName}Dto.java`;
    const templateFile = '../template/dto.java';
    // Tạo folder nếu chưa tồn tại
    if (!fs.existsSync(dtoDir)) {
        fs.mkdirSync(dtoDir, { recursive: true });
    }
    const entityProperties = [];
    const entityImport = new Set();
    tableColumns.forEach(column => {
        let { name: columnName, dataType } = column;
        const [javaDataType, javaPackageName] = convertOracleDataTypeToJava(dataType);
        const javaAttributeName = snakeToCamel(columnName);
        if (javaPackageName !== '') {
            entityImport.add(`\nimport ${javaPackageName};`)
        }
        if ('ID' === columnName.toUpperCase()) {
            entityProperties.unshift(`    private ${javaDataType} ${javaAttributeName};`);
        } else {
            entityProperties.push(`    private ${javaDataType} ${javaAttributeName};`);
        }
    })
    const entityPropertiesContent = entityProperties.join('\n');
    const entityImportContent = [...entityImport].join('');
    genFileFromTemplate(fileCategoryName, templateFile, destinationFile, basePackageName, entityName, tableName, entityPropertiesContent, entityImportContent);
}