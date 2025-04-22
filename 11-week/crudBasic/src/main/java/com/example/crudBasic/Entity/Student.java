package com.example.crudBasic.Entity;

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
