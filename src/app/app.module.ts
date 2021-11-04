import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Routes,RouterModule } from '@angular/router';

const sharukh:Routes=[
  {path:'Home',component:HomeComponent},
  {path:'About',component:AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule,RouterModule.forRoot(sharukh)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
