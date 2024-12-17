import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudappsComponent } from './crudApp/crudapps/crudapps.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Card } from 'primeng/card';
@NgModule({
  declarations: [
    AppComponent,
    CrudappsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    Card
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
