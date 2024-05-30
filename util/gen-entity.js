const fs = require('fs');
const genFileFromTemplate = require('./genFileFromTemplate');
const convertOracleDataTypeToJava = require('./convertOracleDataTypeToJava');
const { snakeToCamel } = require('./string-util');

module.exports = function genEntity(baseFolder, basePackageName, entityName, tableName, tableColumns) {
    const fileCategoryName = 'Entity';
    // Entity
    const entityDir = `${baseFolder}/entity`;
    const destinationFile = `${entityDir}/${entityName}.java`;
    const templateFile = '../template/entity.java';
    // Tạo folder nếu chưa tồn tại
    if (!fs.existsSync(entityDir)) {
        fs.mkdirSync(entityDir, { recursive: true });
    }
    const entityProperties = [];
    const entityImport = new Set();
    tableColumns.forEach(column => {
        let { name: columnName, dataType } = column;
        const [javaDataType, javaPackageName] = convertOracleDataTypeToJava(dataType);
        const javaAttributeName = snakeToCamel(columnName);
        if (javaPackageName !== '') {
            entityImport.add(`import ${javaPackageName};`)
        }
        if ('ID' === columnName.toUpperCase()) {
            entityImport.add('import jakarta.persistence.GeneratedValue;');
            entityImport.add('import jakarta.persistence.GenerationType;');
            entityImport.add('import jakarta.persistence.Id;');
            entityProperties.unshift(`    private ${javaDataType} ${javaAttributeName};`);
            entityProperties.unshift(`    @Column(name = "${columnName}")`);
            entityProperties.unshift(`    @Id`, `    @GeneratedValue(strategy = GenerationType.IDENTITY)`);
        } else {
            entityImport.add('import jakarta.persistence.Column;');
            entityProperties.push(`\n    @Column(name = "${columnName}")`);
            entityProperties.push(`    private ${javaDataType} ${javaAttributeName};`);
        }
    })
    const entityPropertiesContent = entityProperties.join('\n');
    const entityImportContent = [...entityImport].join('\n');
    genFileFromTemplate(fileCategoryName, templateFile, destinationFile, basePackageName, entityName, tableName, entityPropertiesContent, entityImportContent);
}