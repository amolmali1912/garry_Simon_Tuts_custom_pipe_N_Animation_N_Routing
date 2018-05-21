import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DataService } from './data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SortPipe } from './app.sort';
import { findG } from './findG';
import { TestComponent } from './test/test.component';
import { DeptdetailsComponent } from './deptdetails/deptdetails.component';
import { DeptComponent } from './dept/dept.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SortPipe,
    findG,
    TestComponent,
    DeptdetailsComponent,
    DeptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule  
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
