import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { StockManageComponent } from './stock/stock-manage/stock-manage.component';
import { StarsComponent } from './stars/stars.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StockFormComponent } from './stock/stock-form/stock-form.component';
import { StockService } from './stock/stock.service';
import { DemoComponent } from './page/demo/demo.component';
import { PipelineComponent } from './page/demo/component/pipeline/pipeline.component';
import { PipelinePipe } from './page/demo/component/pipeline.pipe';
import { StockFilterPipe } from './stock/stock-filter.pipe';
import { FormDemoComponent } from './page/form-demo/form-demo.component';
import { TemplateFormComponent } from './page/form-demo/component/template-form/template-form.component';
import { ResponsiveFormComponent } from './page/form-demo/component/responsive-form/responsive-form.component';
import { MobileValidatorDirective } from './directives/mobile-validator.directive';
import { PasswordValidatorDirective } from './directives/password-validator.directive';
import { HttpDemoComponent } from './page/http-demo/http-demo.component';
import { HttpClientModule } from '@angular/common/http';


const routeConfig: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'stock', component: StockManageComponent },
  { path: 'stock/:id', component: StockFormComponent },
  { path: 'demo', component: DemoComponent },
  {
    path: 'form-demo',
    component: FormDemoComponent,
    children: [
      { path: '', redirectTo: '/form-demo/template-form', pathMatch: 'full' },
      { path: 'template-form', component: TemplateFormComponent },
      { path: 'responsive-form', component: ResponsiveFormComponent },
    ]
  },
  { path: 'http-demo', component: HttpDemoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent,
    StockManageComponent,
    StarsComponent,
    DashboardComponent,
    StockFormComponent,
    DemoComponent,
    PipelineComponent,
    PipelinePipe,
    StockFilterPipe,
    FormDemoComponent,
    TemplateFormComponent,
    ResponsiveFormComponent,
    MobileValidatorDirective,
    PasswordValidatorDirective,
    HttpDemoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
