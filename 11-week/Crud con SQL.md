# CREACION DE CRID EN SPRING BOOT CON BASE DE DATOS 

### Dependencia que se usara

- Spring Web
- MySQL Driver
- Lombok
- Spring Data JPA

## Creacion de estrutura del crud

1. Declaramos las propiedares osea la configuracion principal del crud.

```
spring.application.name=crudBasic
spring.datasource.url=jdbc:mysql://localhost:3307/crudbasic
server.port=8081

spring.datasource.username=root
spring.datasource.password=
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.show-sql=true
spring.jpa.hibernate.ddl-auto=update
debug=true

```

2. Creamos la Entity principal

Lombok nos ahorra poner los getter and setter.

````
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name="estudiantes")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long studentId;
    private String firstName;
    private String lastName;
    @Column(name = "email_address",unique = true)
    private String email;

}
````
3. Creamos el repository
````
import com.example.crudBasic.Entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {

}
````
4. Creamos el service
````
import com.example.crudBasic.Entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {

}
````
5. Creamos el controller
````
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
````