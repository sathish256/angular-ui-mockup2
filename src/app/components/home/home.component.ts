import { Component, Inject, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { TempData } from '../../models/tempData';
import { TodoService } from '../../services/todos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  userDetails: User;
  tempData: TempData[];
  workflow: string;
  isShowAll: boolean;
  searchKeyword: string;
  
  constructor( @Inject(TodoService) public todoService: TodoService, private router: Router) {
    this.todoService.getUserDetails().subscribe((userDetails: User) => {
      this.userDetails = userDetails;
      this.isShowAll = true;
    });

    this.workflow = "Showing Active Workflows";
  }

  showAllAssignment(value: boolean) {
    this.isShowAll = value;
    if(value)
      this.searchKeyword = null;
    else this.searchKeyword = this.userDetails.firstName;    
  }

  searchFilter(value: string) {
    this.searchKeyword = value;
  }

  startA(value: string) {
    this.router.navigateByUrl(`/${value}`);
  }

  changeWorkflow(): void {
    if (this.workflow == "Showing All Workflows")
      this.workflow = "Showing Active Workflows";
    else if (this.workflow == "Showing Active Workflows")
      this.workflow = "Showing Completed Workflows";
    else if (this.workflow == "Showing Completed Workflows")
      this.workflow = "Showing All Workflows";
  }

  ngOnInit(): void {
    this.todoService.getAllTodos().subscribe((tempDataList: TempData[]) => {
      this.tempData = tempDataList;
    });
  }
}
