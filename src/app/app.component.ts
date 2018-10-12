/**
 * 组件
 */
import { Component } from '@angular/core';

@Component({ // 所有组件都必须调用这个注解
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { // 控制器
  title = 'Angular';
}
