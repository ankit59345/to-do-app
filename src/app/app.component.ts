import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasksArray = [];
  title = 'to-do-app';

  addTask(task:any){
    console.log(task);
    
    this.tasksArray.push({
      task : task,
      checked : false
    })
  }
}
