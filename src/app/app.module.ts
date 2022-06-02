import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { TopComponentComponent } from './top-component/top-component.component';

import { MainPageComponent } from './main-page/main-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { CartComponent } from './cart/cart.component';
import { InfoPipe } from './info.pipe';
import { ProductInfoComponent } from './product-info/product-info.component';

import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';





const routes:Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:MainPageComponent},
  {path:'cart',component:CartComponent},
  {path:'productInfo',component:ProductInfoComponent},
  {path:'Register',component:RegistrationComponent},
 
  
  {path:'**',component:MainPageComponent},
  
  
];

@NgModule({
  declarations: [
    AppComponent,
    TopComponentComponent,
   
    MainPageComponent,
    HomePageComponent,
    CartComponent,
    InfoPipe,
    ProductInfoComponent,
    RegistrationComponent,
   

  
  
    

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgxSliderModule,
    FormsModule,
  ],
  providers: [HomePageComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
