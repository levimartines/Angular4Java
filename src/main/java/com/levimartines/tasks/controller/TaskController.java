package com.levimartines.tasks.controller;

import com.levimartines.tasks.domain.Task;
import com.levimartines.tasks.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/tasks")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @GetMapping
    public ResponseEntity<?> listTasks(){
        return ResponseEntity.ok(taskService.listTasks());
    }

    @PostMapping
    public ResponseEntity<?> save(@RequestBody Task task){
        return ResponseEntity.ok(taskService.save(task));
    }

}
