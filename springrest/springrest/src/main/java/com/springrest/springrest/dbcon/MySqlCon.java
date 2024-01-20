package com.springrest.springrest.dbcon;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springrest.springrest.model.Course;

public interface MySqlCon extends JpaRepository<Course, Long> {

}
