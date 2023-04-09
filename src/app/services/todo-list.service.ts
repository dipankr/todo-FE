import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITodoList } from '../interfaces/todo-list.interface';

@Injectable()
export class TodoListService {

  todoServiceList: ITodoList[] = [{
    title: 'Hello',
    description: 'hello this is descrpition.'
  }];

  constructor(private _http: HttpClient) {}

  addTodoList(toDoList: ITodoList): ITodoList[] {
    this.todoServiceList.push(toDoList);
    return this.todoServiceList;
    // return this._http.post(`/`);
  }

  getTodoList(): ITodoList[] {
    // return this._http.get(`/g`);
    return this.todoServiceList;
  }

}
