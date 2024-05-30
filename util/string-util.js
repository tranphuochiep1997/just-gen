function snakeToCamel (str) {
    return str.toLowerCase().replace(/(_\w)/g, m => m.toUpperCase().substr(1));
}
module.exports = { snakeToCamel }