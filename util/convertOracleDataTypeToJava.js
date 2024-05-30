const mappingDataType = new Map([
    ['CHAR', ['Character', '']],
    ['CHARACTER', ['Character', '']],
    ['CHARACTER VARYING', ['String', '']],
    ['CHARACTER VARYING', ['String', '']],
    ['VARCHAR', ['String', '']],
    ['VARCHAR2', ['String', '']],
    ['NVARCHAR', ['String', '']],
    ['NVARCHAR2', ['String', '']],
    ['LONG', ['String', '']],
    ['NUMBER', ['Long', '']],
    ['DATE', ['Date', 'java.util.Date']],
    ['INT', ['INTEGER', '']],
    ['INTEGER', ['INTEGER', '']],
    ['SMALLINT', ['Short', '']],
    ['BLOB', ['Blob', 'java.sql.Blob']],
    ['DECIMAL', ['BigDecimal', 'java.math.BigDecimal']],
    ['DOUBLE PRECISION', ['Double', '']],
    ['REAL', ['Double', '']],
    ['FLOAT', ['Float', '']],
]);
module.exports = function convertOracleDataTypeToJava(dataType) {
    const javaTypes = mappingDataType.get(dataType);
    return javaTypes ? javaTypes : ['String', '']; // Trả về String mặc định những data type chưa được mapping
}