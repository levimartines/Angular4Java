import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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
    @Output() taskAdded = new EventEmitter<Task>();

    constructor(private taskService: TaskService) {
    }

    ngOnInit() {
    }

    addTask(taskName: string) {
        let task = new Task(taskName, false, '15/04/2020');
        this.taskService.insertTask(task).subscribe(
            (newTask: Task) => {
                this.addTaskValue = '';
                this.taskAdded.emit(newTask);
            },
            error => {
                this.addTaskValue = '';
                console.log(error);
            }
        );
    }
}
