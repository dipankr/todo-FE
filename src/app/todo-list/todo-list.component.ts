import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../services/todo-list.service';
import { ITodoList } from '../interfaces/todo-list.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoList: ITodoList[];
  todoTitle: string = '';
  todoDescription: string = '';

  constructor(private todoListService: TodoListService) {
    this.todoList = this.todoListService.getTodoList();
  }

  ngOnInit() {
    // this.todoList = this.todoListService.getTodoList();
  }

  onKey(event: any) { // without type info
    this.todoTitle = '';
    this.todoTitle += event.target.value;
  }

  addTodoList() {
    this.todoList = this.todoListService.addTodoList({ 'title': this.todoTitle, 'description': this.todoDescription});
  }
}
