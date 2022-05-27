import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { TopComponentComponent } from './top-component/top-component.component';
import { LeftComponentComponent } from './left-component/left-component.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { CartComponent } from './cart/cart.component';
import { InfoPipe } from './info.pipe';





const routes:Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:MainPageComponent},
  {path:'cart',component:CartComponent},
  
  {path:'**',component:MainPageComponent},
  
  
];

@NgModule({
  declarations: [
    AppComponent,
    TopComponentComponent,
    LeftComponentComponent,
    MainPageComponent,
    HomePageComponent,
    CartComponent,
    InfoPipe

  
  
    

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgxSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
