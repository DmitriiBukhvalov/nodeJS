const http = require('http');
let nodePath = process.argv[0];
let appPath = process.argv[1];
let name = process.argv[2];
let age = process.argv[3];

console.log('nodePath: ' + nodePath);
console.log('appPath: ' + appPath);
console.log();
console.log('name: ' + name);
console.log('age: ' + age);

http.createServer(function (request, response) {
    response.end('Hello NodeJS!');
}).listen(3000, '127.0.0.1', function () {
    console.log(
        'Сервер начал прослушивание запросов на порту 3000'
    );
});