#!/usr/bin/env node
const fs = require('fs');
const genController = require('./util/gen-controller');
const genService = require('./util/gen-service');
const genRepository = require('./util/gen-repository');
const genDto = require('./util/gen-dto');
const genEntity = require('./util/gen-entity');
const genServiceImpl = require('./util/gen-serviceImpl');
const genMapper = require('./util/gen-mapper');
const getTableColumns = require('./util/getTableColumns');

const gencodeJson = fs.readFileSync('./gencode.json', { encoding: 'utf8', flag: 'r' });
const gencodeConfig = JSON.parse(gencodeJson);
let { baseFolder, packageName, entityName, tableName, enableDBConnect, dbConfig } = gencodeConfig;
baseFolder = `${baseFolder}/${packageName.replace(/\./g, '/')}`;
entityName = entityName.charAt(0).toUpperCase() + entityName.slice(1);

(async function () {
    let tableColumns = [];
    if (enableDBConnect) {
        if (!dbConfig) {
            console.error('Vui lòng bổ sung dbConfig trong gencode.json để cho phép kết nối DB');
            return;
        } else {
            tableColumns = await getTableColumns(dbConfig, tableName);
            console.log('Columns:', tableColumns);
        }
    }
    if (tableColumns.length === 0) {
        tableColumns = [{ name: 'ID', dataType: 'NUMBER' }];
    }
    genController(baseFolder, packageName, entityName);
    genService(baseFolder, packageName, entityName);
    genRepository(baseFolder, packageName, entityName);
    genDto(baseFolder, packageName, entityName, tableName, tableColumns);
    genEntity(baseFolder, packageName, entityName, tableName, tableColumns);
    genServiceImpl(baseFolder, packageName, entityName);
    genMapper(baseFolder, packageName, entityName);
})()