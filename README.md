Tool using npm to generate Controller, Service, Repository, Entity, Dto, Mapper boilerplate for Spring Boot web

## Prerequisites

This project requires NodeJS (version 8 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
6.4.1
v8.16.0
```

## Usage

1. Place `gencode.json` at your root folder
```
{
    "baseFolder": "./src/main/java",
    "packageName": "com.example.demo",
    "entityName": "User",
    "tableName": "tbl_user",
    "enableDBConnect": true,
    "dbConfig": {
        "connectString": "Host:Port/Servicename e.g 192.168.100.56:1521/orcl",
        "user": "username",
        "password": "password"
    }
}
```

### Options
- **baseFolder** Java base folder from root project 
- **packageName** Spring boot project package name
- **entityName** Entity or Function or Domain name used to generate files, class name like *ProductService*
- **tableName** Table name in database, used for jpa to connect exactly. Something different from Entityname
- **enableDBConnect** Enable generate entity from database table columns and data type
- **dbConfig** Connection config to Oracle database
- **dbConfig.connectString** Database connection string 
- **dbConfig.user** Database username
- **dbConfig.password** Database password

2. Run command gencode
```
npx just-gen@latest
```

### Output
```
.
├── src
│   ├── main
│   │   ├── java
│   │   │   ├── com
│   │   │   │   ├── example
│   │   │   │   │   ├── demo
|   │   │   │   │   │   ├── Application.java
|   │   │   │   │   │   ├── controller
|   │   │   │   │   │   │   └── UserController.java
|   │   │   │   │   │   ├── service
|   │   │   │   │   │   │   ├── UserService.java
|   │   │   │   │   │   │   └── impl
|   │   │   │   │   │   │       └── UserServiceImpl.java
|   │   │   │   │   │   ├── repository
|   │   │   │   │   │   │   └── UserRepository.java
|   │   │   │   │   │   ├── mapper
|   │   │   │   │   │   │   └── UserMapper.java
|   │   │   │   │   │   ├── entity
|   │   │   │   │   │   │   └── User.java
|   │   │   │   │   │   └── dto
|   │   │   │   │   │       └── UserDto.java
│   │   └── resources
│   │       └── application.properties
├── gencode.json
└── pom.xml
```