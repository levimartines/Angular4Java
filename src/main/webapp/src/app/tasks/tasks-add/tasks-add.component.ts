import {Component, OnInit} from '@angular/core';
import {TaskService} from "../task.service";
import {Task} from "../task.model";

@Component({
    selector: 'app-tasks-add',
    templateUrl: './tasks-add.component.html',
    styleUrls: ['./tasks-add.component.css'],
    providers: [TaskService]
})
export class TasksAddComponent implements OnInit {

    addTaskValue: string = null;

    constructor(private taskService: TaskService) {
    }

    ngOnInit() {
    }

    addTask(taskName: string) {
        let task = new Task(taskName, false, '15/04/2020');
        this.taskService.insertTask(task).subscribe(
            (newTask: Task) => {
                this.addTaskValue = '';
                this.taskService.onTaskAdded.emit(newTask);
            }
        );
    }
}
