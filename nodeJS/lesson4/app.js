const http = require('http');
const greeting = require('./greeting');

global.name = 'Eugene';

global.console.log(date);
console.log(greeting.getMessage());

http.createServer(function (request, response) {
    response.end('Hello NodeJS!');
}).listen(3000, '127.0.0.1', function () {
    console.log(
        'Сервер начал прослушивание запросов на порту 3000'
    );
});