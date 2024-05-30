#!/usr/bin/env node
const fs = require('fs');
const genController = require('./util/gen-controller');
const genService = require('./util/gen-service');
const genRepository = require('./util/gen-repository');
const genDto = require('./util/gen-dto');
const genEntity = require('./util/gen-entity');
const genServiceImpl = require('./util/gen-serviceImpl');
const genMapper = require('./util/gen-mapper');

const gencodeJson = fs.readFileSync('./gencode.json', { encoding: 'utf8', flag: 'r' });
const gencodeConfig = JSON.parse(gencodeJson);
let { baseFolder, packageName, entityName } = gencodeConfig;
entityName = entityName.charAt(0).toUpperCase() + entityName.slice(1);

// Kiểm tra folder tồn tại
if (!fs.existsSync(baseFolder)) {
    throw Error(`baseFolder ${baseFolder} không tồn tại!`);
}

// // Connection string
// const dbConfig = {
//     user: 'your_username',
//     password: 'your_password',
//     connectString: 'your_connect_string' // Host:Port/ServiceName
// };

  
genController(baseFolder, packageName, entityName);
genService(baseFolder, packageName, entityName);
genRepository(baseFolder, packageName, entityName);
genDto(baseFolder, packageName, entityName);
genEntity(baseFolder, packageName, entityName);
genServiceImpl(baseFolder, packageName, entityName);
genMapper(baseFolder, packageName, entityName);