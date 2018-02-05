import { Component } from '@angular/core';
import { User } from './models/user';
import { TempData } from './models/tempData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;
  tempData: TempData[];

  constructor(){
    this.user = {
      firstName: 'Sathish',
      lastName: 'Krishnamurthy',
      role: 'Admin'
    }
    this.tempData = [{type: 'D', bpNumber: '123456', loanNumber: 'LN12345', description: 'Inmobiliaria Valle Verde Limitada', documents: 15, amount: 60000, status: 'Operations', color: 'green'},
    {type: 'L', bpNumber: '123456', loanNumber: 'LN12345', description: 'Inmobiliaria Valle Verde Limitada', documents: 3, amount: 600000, status: 'VP Review', color: 'green'},
    {type: 'E', bpNumber: '', loanNumber: '', description: 'Replacement Office Chair', documents: 1, amount: 300, status: 'Jaime Mendoza', color: 'yellow'},    
    {type: 'R', bpNumber: '', loanNumber: '', description: 'Disbursement Issue', documents: 0, amount: null, status: 'Jaime Mendoza', color: 'maroon'}];
  }
}
