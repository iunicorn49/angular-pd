# Angular-Note

## 概念

### 简介

> google团队维护的框架.
> 功能大而全.
> 支持服务器端渲染.
> 兼容移动端和桌面端.

### Angular程序架构

#### 组件(Component)

> 是**Angular**应用的基本构建块, 你可以把一个组件理解为一段带有业务逻辑和数据的**HTML**.
> 组件之间可以由父子关系, 一个组件可以包含多个组件.
> 装饰器, 模板, 控制器, 是每个组件的必备要素.
> 输入属性, 提供器, 生命周期钩子, 样式表, 动画, 输出属性, 是组件的可选要素.

##### @Component()

> 组件元数据装饰器.
> 用来告知Angular框架, 如何处理一个TypeScript类.
> 它包含多个属性, 这些属性称之为元数据, Angular会根据这些元数据的值来渲染这个组件, 并执行这个组件的逻辑.

##### Template

> 模板, 也就是**HTML**.

##### Controller

> 控制器, 被`@Component()`装饰的TypeScript类被称之为控制器.
> 包含组件所有的属性和方法, 用来处理组件大部分的逻辑.

##### @Inputs()

> 输入属性, 来自外界的数据, 例如, 父组件传递给子组件的数据.

##### providers

> 提供器, 依赖注入.

##### Lifecycle Hooks

> 生命周期钩子.

##### styles

> 样式表, 组件专用的样式.

##### Animations

> 动画库.

##### @Outputs

> 输出属性.

#### 服务(Service)

> 用来封装可重用的业务逻辑.

#### 指令

> 允许你向**HTML**添加自定义行为.

##### *ngFor

> 循环

```html
<li *ngFor="let stock of stocks; let i = index;">
	<div>{{i}} {{stock.name}}</div>
</li>
```

#### 模块(NgModule)

> 由`@NgModule()`装饰的TypeScript类.
> 用来将应用中不同的部分组织成一个**Angular**框架可以理解的单元.
> [组件, 服务, 指令]是用来打包完成某一项功能, 模块是则是用来分发这一功能.

## 路由

> Angular Route.

文档: https://angular.cn/guide/router

### 传递数据

#### 在查询参数中传递数据

#### 在路由路径中传递数据

#### 在路由配置中传递数据

### 重定向路由

> 在用户访问一个特点的地址时, 将其重定向到另一个指定的地址.
> 例如: www.aaa.com => www.aaa.com/products
> 例如: www.aaa.com/x => www.aaa.com/y

```typescript
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // 当路径为空的时候, 重定向到 /home
  { path: 's', redirectTo: '/stock', pathMatch: 'prefix' }, // 当路径为/s的时候, 重定向到 /stock
  { path: 'home', component: HomeComponent },
  { path: 'stock', component: StockComponent, data: [{isPro: true}] },
  { path: 'test/:id', component: TestComponent },
  { path: '**', component: Code404Component }
];
```

### 子路由

## 工具

### AngularCLI

> 官方脚手架工具.

```bash
npm install -g @angular/cli #安装命令行工具

ng -v #查看版本

ng new [project] #创建项目 [项目]

ng g component [component] #创建组件 [组件名] 

ng g component [mkdir/component] #创建组件 [文件夹/组件名]
```

#### 命令生成的项目目录

**project**
- e2e: 端到端的测试目录, 用于自动化测试.
- src: 应用源代码, 我们主要codeing的地方.
	- app: 应用的组件和模块.
	- assets: 用来放静态资源, 例如图片.
	- environments: 环境配置, [开发, 测试, 生成]等.
	- index.html: 整个应用的根HTML.
	- main.ts: 整个应用脚本的入口文件.
	- polyfills.ts: 用来导入必要的库, 用于兼容老版本浏览器.
	- style.css: 应用全局样式.
	- test.ts: 用于测试.
	- karma.conf.js: 用于测试.

