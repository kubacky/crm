import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/interfaces/task';

@Component({
  selector: 'crm-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;

  constructor() { }

  ngOnInit() {
  }

}
