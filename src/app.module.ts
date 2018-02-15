import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './app/components/home/home.component';
import { AgGridModule } from 'ag-grid-angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatListModule } from '@angular/material';
import { TodoService } from './app/services/todos.service';
import { HttpClientModule } from '@angular/common/http';
import { LargeViewComponent } from './app/components/large-view/large-view.component';
import { AssignmentTemplateRenderer } from './app/components/cell-renderers/assignment.component';
import { StatusTemplateRenderer } from './app/components/cell-renderers/status.component';
import { AmountTemplateRenderer } from './app/components/cell-renderers/amount.component';

@NgModule({
  declarations: [HomeComponent, LargeViewComponent, AssignmentTemplateRenderer, StatusTemplateRenderer, AmountTemplateRenderer],
  imports: [BrowserModule, HttpClientModule, FlexLayoutModule, MatCardModule, MatListModule, AgGridModule.withComponents([AssignmentTemplateRenderer, StatusTemplateRenderer, AmountTemplateRenderer])],
  providers: [TodoService],
  bootstrap: [HomeComponent]
})
export class AppModule { }
