/**
 * 模块
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/h;
import { HeaderComponent } from './header/header.component'ttp';

@NgModule({ // 必要注解
  declarations: [ // 声明组件, HeaderComponent和管道
    AppComponent
  ],
  imports: [ // 依赖
    BrowserModule, // 浏览器模块
    FormsModule, // 表单处理模块
    HttpModule // 服务器通讯模块
  ],
  providers: [], // 声明服务
  bootstrap: [AppComponent] // 声明主组件
})
export class AppModule { }
