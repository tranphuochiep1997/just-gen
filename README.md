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
    "baseFolder": "./src/main/java/com/example/demo",
    "packageName": "com.example.demo",
    "entityName": "User"
}
```
2. Run command gencode
```
npx just-gen
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
|   │   │   │   │   │   ├── entity
|   │   │   │   │   │   │   └── User.java
|   │   │   │   │   │   └── dto
|   │   │   │   │   │       └── UserDto.java
│   │   └── resources
│   │       └── application.properties
├── gencode.json
└── pom.xml
```