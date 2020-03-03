import {Component, OnInit, ViewChild} from '@angular/core';
import {TasksListComponent} from "./tasks-list/tasks-list.component";

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

    @ViewChild(TasksListComponent, {static: false}) taskList: TasksListComponent;

    constructor() {
    }

    onTaskAdded(task) {
        this.taskList.tasks.push(task);
    }

    ngOnInit() {
    }

}
