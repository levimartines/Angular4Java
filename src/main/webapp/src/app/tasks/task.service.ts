import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Task} from "./task.model";
import {map} from "rxjs/operators";

@Injectable()
export class TaskService {

    onTaskAdded = new EventEmitter<Task>();

    constructor(private http: HttpClient) {
        this.onTaskAdded = new EventEmitter<any>();
    }

    getTasks() {
        return this.http.get('/api/tasks');
    }

    updateTask(task: Task, status: boolean) {
        task.completed = status;
        return this.http.post('/api/tasks/save', task).pipe(map(res => res));
    }

    insertTask(task: Task){
        return this.http.post('/api/tasks/save', task).pipe(map(res => res));
    }
}
