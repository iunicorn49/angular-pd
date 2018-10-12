import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {
  private stocks: Array<Stock>
  constructor() { }

  ngOnInit() { // 初始化钩子
    this.stocks = [ // 伪造数据
      new Stock(1, '第一只股吧票', 1.99, 3.5, "描述", ['A', 'B']),
      new Stock(2, '第二只股吧票', 2.99, 5, "描述", ['A', 'B']),
      new Stock(3, '第三只股吧票', 3.99, 1.5, "描述", ['A', 'B']),
      new Stock(4, '第四只股吧票', 4.99, 2, "描述", ['A', 'B']),
      new Stock(5, '第五只股吧票', 5.99, 2.5, "描述", ['A', 'B'])
    ];
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
  ) {

  }
}