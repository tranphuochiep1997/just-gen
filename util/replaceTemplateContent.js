module.exports = function replaceTemplate(dataTemplate, basePackageName, entityName) {
    return dataTemplate
    .replace(/\$\{basePackageName\}/g, basePackageName)
    .replace(/\$\{entityName\}/g, entityName)
    .replace(/\$\{entityNameLowerCase\}/g, entityName.toLowerCase());
}