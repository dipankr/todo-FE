import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { TodoListService } from '../services/todo-list.service';
import { ITodoList } from '../interfaces/todo-list.interface';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoList: ITodoList[] = [];
  todoTitle: string = '';
  todoDescription: string = '';
  isAccordianCollapse = true;
  isEditMode: Array<boolean> = [];

  constructor(
    private todoListService: TodoListService,
    private renderer: Renderer2
    ) {
    this.getTodoList();
  }

  ngOnInit() {
    // this.todoList = this.todoListService.getTodoList();
  }

  onKey(event: any) {
    this.todoTitle = event.target.value;
    this.addTodoList();
  }

  getTodoList(): void {
    this.todoListService.getTodoList().subscribe((res) => {
      this.todoList = res?.data || [];
    });
  }

  addTodoList() {
    const toDoListObj = { 'title': this.todoTitle, 'description': this.todoDescription};
    this.todoListService.addTodoList(toDoListObj).subscribe((res) => {
      this.getTodoList();
      this.resetToDoInput();
    });
  }

  resetToDoInput() {
    this.todoTitle = '';
  }

  // toggleShow(event: Event) {
  //   if(this.isAccordianCollapse) {
  //     this.renderer.addClass(event.target,"show");
  //     this.renderer.setAttribute(event.target, "aria-expanded", JSON.stringify(!this.isAccordianCollapse));
  //   } else {
  //     this.renderer.addClass(event.target,"show");
  //     this.renderer.setAttribute(event.target, "aria-expanded", JSON.stringify(!this.isAccordianCollapse));
  //   }
  // }

  editTask(taskId: string | undefined) {
  }

  deleteTodoTask(taskId: any) {
    this.todoListService.deleteTodoTask(taskId).subscribe((res) => {
      if(res.data.acknowledged) {
        this.getTodoList();
      } else {
        console.log('Error while deleting task');
      }      
    });
  }

  editTodoTask(id: string | undefined, title: string, index: number) {
    if(this.isEditMode[index]) {
      this.todoListService.editTodoTask(id, title).subscribe((res) => {
        if(res) {
          this.isEditMode[index] = !this.isEditMode[index];
          this.getTodoList();
        } else {
          console.log('Error while deleting task');
        }      
      });
    }
  }
}
