import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITodoList } from '../interfaces/todo-list.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TodoListService {

  todoServiceList: ITodoList[] = [{
    title: 'Hello',
    description: 'hello this is descrpition.'
  }];

  constructor(private _http: HttpClient) { }

  addTodoList(toDoList: ITodoList): Observable<any> {
    this.todoServiceList.push(toDoList);
    return this._http.post(`/todolist`, toDoList);
  }

  getTodoList(): Observable<ITodoList[]> {
    return this._http.get<ITodoList[]>(`/todolist`);
  }

}
