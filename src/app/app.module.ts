import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Page2Component } from './page2/page2.component';
import { DetailPageComponent } from './detail-page/detail-page.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'page2', component: Page2Component },
  { path: 'detail/:name', component: DetailPageComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page2Component,
    DetailPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
