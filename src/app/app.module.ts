import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FlexLayoutModule, MatCardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
