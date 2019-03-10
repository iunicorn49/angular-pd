import * as express from 'express';

const app = express();

app.get('/api/', (request: any, response: any) => {
  response.send('这里是首页!');
});

app.get('/api/stock', (request: any, response: any) => {
  console.log('request:', '访问了');
  response.json(stocks);
});

app.get('/api/stock/:id', (request: any, response: any) => {
  response.json(stocks.find((stock) => stock.id == request.params.id));
});

const server = app.listen(3000, 'localhost', () => {
  console.log('服务器已经启用');
});

export class Stock {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {}
}

const stocks: Stock[] = [ // 伪造数据
  new Stock(1, '第一只股票', 1.99, 3.5, '描述', ['IT', '互联网']),
  new Stock(2, '第二只股票', 2.99, 5, '描述', ['IT', '互联网']),
  new Stock(3, '第三只股票', 3.99, 1.5, '描述', ['IT', '互联网']),
  new Stock(4, '第四只股票', 4.99, 2, '描述', ['IT', '互联网']),
  new Stock(5, '第五只股票', 5.99, 2.5, '描述', ['IT', '互联网'])
];