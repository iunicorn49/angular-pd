import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor() {
  }

  private stocks: Stock[] = [ // 伪造数据
    new Stock(1, '第一只股票', 1.99, 3.5, '描述', ['A', 'B']),
    new Stock(2, '第二只股票', 2.99, 5, '描述', ['A', 'B']),
    new Stock(3, '第三只股票', 3.99, 1.5, '描述', ['A', 'B']),
    new Stock(4, '第四只股票', 4.99, 2, '描述', ['A', 'B']),
    new Stock(5, '第五只股票', 5.99, 2.5, '描述', ['A', 'B'])
  ];

  getStocks(): Stock[] {
    return this.stocks;
  }

  getStock(id: number): Stock {
    let result = this.stocks.find(stock => stock.id === id);
    if (!result) {
      result = new Stock(0, '', 0, 0, '', []);
    }
    return result;
  }

}

/**
 * 股票的类
 */
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
