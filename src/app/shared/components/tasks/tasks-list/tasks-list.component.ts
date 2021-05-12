import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/interfaces/task';

@Component({
  selector: 'crm-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {

  @Input() tasks: Task[];

  constructor() { }

  ngOnInit() {
  }

}
