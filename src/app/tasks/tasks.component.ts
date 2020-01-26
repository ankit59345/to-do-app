import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @Input() todoArray=[];
  constructor() { }

  addTask(task:any){
    this.todoArray.push({
      task : task,
      checked : false
    })
  }

  removeTask(i:number){
    let removed = this.todoArray.splice(i,1);
  }
  


  ngOnInit() {
  }

}
