package com.levimartines.tasks;

import com.levimartines.tasks.domain.Task;
import com.levimartines.tasks.repository.TaskRepository;
import com.levimartines.tasks.service.TaskService;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TasksApplication implements CommandLineRunner {

    @Autowired
    private TaskService taskService;

    public static void main(String[] args) {
        SpringApplication.run(TasksApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        taskService.save(new Task(null, "Create Spring Boot Application", LocalDate.now(), true));
        taskService.save(new Task(null, "Create Spring Project Packages", LocalDate.now().plus(1,
            ChronoUnit.DAYS), false));
        taskService.save(new Task(null, "Create the Task Domain Class", LocalDate.now().plus(3,
            ChronoUnit.DAYS), false));
        taskService
            .save(new Task(null, "Create service and repository Classes", LocalDate.now().plus(5,
                ChronoUnit.DAYS), false));
        taskService.save(
            new Task(null, "Create the Command Line Runner and load data", LocalDate.now().plus(8,
                ChronoUnit.DAYS), false));
        taskService.save(
            new Task(null, "Create the required configuration properties", LocalDate.now().plus(10,
                ChronoUnit.DAYS), false));
        taskService.save(new Task(null, "Run the Spring Boot App", LocalDate.now().plus(12,
            ChronoUnit.DAYS), false));
        taskService
            .save(new Task(null, "Check H2 Console for initial data", LocalDate.now().plus(13,
                ChronoUnit.DAYS), false));
    }
}
