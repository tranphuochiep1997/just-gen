module.exports = function replaceTemplate(dataTemplate, basePackageName, entityName, tableName = '', entityPropertiesContent = '', entityImportContent = '') {
    return dataTemplate
    .replace(/\$\{basePackageName\}/g, basePackageName)
    .replace(/\$\{entityName\}/g, entityName)
    .replace(/\$\{entityNameLowerCase\}/g, entityName.toLowerCase())
    .replace(/\$\{tableName\}/g, tableName)
    .replace(/\$\{entityPropertiesContent\}/g, entityPropertiesContent)
    .replace(/\$\{entityImportContent\}/g, entityImportContent);
}