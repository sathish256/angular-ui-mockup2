import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './app/components/home/home.component';
import { AgGridModule } from 'ag-grid-angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { TodoService } from './app/services/todos.service';
import { HttpClientModule } from '@angular/common/http';
import { LargeViewComponent } from './app/components/large-view/large-view.component';
import { AssignmentTemplateRenderer } from './app/components/cell-renderers/assignment.component';
import { StatusTemplateRenderer } from './app/components/cell-renderers/status.component';
import { AmountTemplateRenderer } from './app/components/cell-renderers/amount.component';
import { AppComponent } from './app/components/app.component';
import { AppRouteModule } from './app/components/app.route.module';
import { LoginComponent } from './app/components/login/login.component';
import { AssignmentComponent } from './app/components/assignment/assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LargeViewComponent,
    AssignmentComponent,
    AssignmentTemplateRenderer,
    StatusTemplateRenderer,
    AmountTemplateRenderer
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRouteModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatCardModule,
    AgGridModule.withComponents([
      AssignmentTemplateRenderer,
      StatusTemplateRenderer,
      AmountTemplateRenderer
    ])
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
