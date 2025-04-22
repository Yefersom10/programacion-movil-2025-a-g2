package com.example.crudBasic.controller;

import com.example.crudBasic.Entity.Student;
import com.example.crudBasic.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/v1/students")
public class StudentController {
    @Autowired
    private  StudentService studentService;

    @GetMapping
    public List<Student>getAll(){
        return studentService.getStudent();
    }

    @GetMapping("/{studentId}")
    public Optional<Student> getBId(@PathVariable("studentId")Long studentId){
        return studentService.getStudent(studentId);
    }

    @PostMapping
    public void saveOrUpdate(@RequestBody Student student){
        studentService.saveOrUpdate(student);
    }
    @DeleteMapping("{studentId}")
    public void saveOrUpdate(@PathVariable ("studentId")Long studentId){
        studentService.delete(studentId);
    }
}
