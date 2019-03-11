"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var ws_1 = require("ws");
var app = express();
app.get('/api/', function (request, response) {
    response.send('这里是首页!');
});
app.get('/api/stock', function (request, response) {
    console.log('request:', '访问了');
    response.json(stocks);
});
app.get('/api/stock/:id', function (request, response) {
    response.json(stocks.find(function (stock) { return stock.id === +request.params.id; }));
});
var server = app.listen(3001, 'localhost', function () {
    console.log('服务器已经启用');
});
var Stock = /** @class */ (function () {
    function Stock(id, name, price, rating, desc, categories) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
        this.categories = categories;
    }
    return Stock;
}());
var stocks = [
    new Stock(1, '第一只股票', 1.99, 3.5, '描述', ['IT', '互联网']),
    new Stock(2, '第二只股票', 2.99, 5, '描述', ['IT', '互联网']),
    new Stock(3, '第三只股票', 3.99, 1.5, '描述', ['IT', '互联网']),
    new Stock(4, '第四只股票', 4.99, 2, '描述', ['IT', '互联网']),
    new Stock(5, '第五只股票', 5.99, 2.5, '描述', ['IT', '互联网'])
];
var wsServer = new ws_1.Server({
    port: 3000
});
wsServer.on('connection', function (websocket) {
    websocket.send('websocket连接'); // 接受客户端发来的连接
    websocket.on('message', function (message) {
        console.log('接收到客户端发送的消息:', message);
    });
});
setInterval(function () {
    if (wsServer.clients) {
        wsServer.clients.forEach(function (client) {
            client.send('服务器定时精准推送');
        });
    }
}, 2000);
