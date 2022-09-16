import { HttpClient } from '@angular/common/http';
import { Component, DoCheck,OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit, DoCheck {

  constructor(private http:HttpClient) { }
  tasks:any=[];
  completedTask:any=[];

  ngOnInit(): void {
    // this.fetchTask();
    // this.fetchCompletedTask();

  }


  ngDoCheck(): void {
    // this.saveNewTask()  ;
    // this.saveCompletedTask();
      
  }


  getTask(task:HTMLInputElement){

    if(task.value !== ''){
      this.tasks.push(task.value)
    }else{
      alert('Write Your Task')
    }
    return task.value = '';
    
  }

  deleteTask(item:number){
    this.tasks.splice(item,1)
  }

  completeTask(item:number,task:string){
    this.tasks.splice(item,1)
    this.completedTask.push(task)
    console.log(task)
    
  }

  clearTask(){
    this.completedTask = [];
  }

  saveNewTask(){
    this.http.put('https://ng-pukanshu-project-default-rtdb.firebaseio.com/tasks.json',this.tasks).subscribe(response => {
      console.log(response);
      
    })
  }


  saveCompletedTask(){
    this.http.put('https://ng-pukanshu-project-default-rtdb.firebaseio.com/completedTask.json',this.completedTask).subscribe(response => {
      console.log(response);
      
    })
  }


  fetchCompletedTask(){
    this.http.get('https://ng-pukanshu-project-default-rtdb.firebaseio.com/completedTask.json',this.completedTask).subscribe(oldCompletTask => {
      this.completedTask = oldCompletTask;
      console.log(oldCompletTask);
      
    })
  }

  fetchTask(){
    this.http.get('https://ng-pukanshu-project-default-rtdb.firebaseio.com/tasks.json',this.tasks).subscribe(oldTask => {
      this.tasks = oldTask;
    })
  }

}
