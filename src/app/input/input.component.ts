import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  task: string = "";
  @Output() eEmit = new EventEmitter();
  constructor() { }
  onAddToList(){
    if(this.task == ""){
      alert("Enter Any Task");
    }
    else{
      this.task = this.task.replace(/^./, this.task[0].toUpperCase());
      this.eEmit.emit(this.task);
      this.task = "";
    }
  }
  ngOnInit() {
  }

}
