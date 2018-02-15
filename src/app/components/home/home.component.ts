import { Component, Inject, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { TempData } from '../../models/tempData';
import { TodoService } from '../../services/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  userDetails: User;
  tempData: TempData[];
  workflow: string;

  constructor( @Inject(TodoService) public todoService: TodoService) {
    this.todoService.getUserDetails().subscribe((userDetails: User) => {
      this.userDetails = userDetails;
    });

    this.workflow = "Showing Active Workflows";
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
