import {Component, OnInit} from '@angular/core';
import {Task} from "../task.model";
import {TaskService} from "../task.service";

@Component({
    selector: 'app-tasks-list',
    templateUrl: './tasks-list.component.html',
    styleUrls: ['./tasks-list.component.css'],
    providers: [TaskService]
})
export class TasksListComponent implements OnInit {

    tasks: Task[] = [];

    constructor(private taskService: TaskService) {
    }

    ngOnInit() {
        this.taskService.getTasks().subscribe(
            (res: Task[]) => this.tasks = res,
            error => console.log(error)
        );
        this.taskService.onTaskAdded.subscribe((task: Task) => this.tasks.push(task));
    }

    onTaskChange(task: Task, taskStatus: boolean) {
        this.taskService.updateTask(task, taskStatus).subscribe();
    }

    getDueDateLabel(task: Task) {
        return task.completed ? 'label-success' : 'label-primary';
    }
}
