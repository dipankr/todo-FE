import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITodoList } from '../interfaces/todo-list.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TodoListService {

  constructor(private _http: HttpClient) { }

  addTodoList(toDoList: ITodoList): Observable<any> {
    return this._http.post(`/todolist`, toDoList);
  }

  getTodoList(): Observable<any> {
    return this._http.get(`/todolist`).pipe(map((res: any) => {
      if(res && !res.error && res.data.length) {
        res.data.forEach((ele: any) => {
          ele['id'] = ele._id;
          delete ele._id;
        });
        return res;
      }
    }));
  }

  deleteTodoTask(id: any): Observable<any> {
    return this._http.delete(`/todolist`, { params:{ id } });
  }

  editTodoTask(id: any, title: string): Observable<any> {
    return this._http.post(`/todolist/editTask`, { id, title });
  }

}
