package com.springrest.springrest.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.springrest.dbcon.MySqlCon;
import com.springrest.springrest.model.Course;

@Service
public class CourseServiceImp implements CourseService {
    @Autowired
    public MySqlCon mySqlCon;// make an veriable

    public CourseServiceImp() {

    }

    @Override
    public List<Course> getCourses() {
        return mySqlCon.findAll();// this code will show all the data from database
    }

    @Override
    public Course getCourse(long courseId) {
        return mySqlCon.getReferenceById(courseId);// for single word

    }

    @Override
    public Course addCourse(Course course) {
        mySqlCon.save(course);
        return course;

    }

    @Override
    public Course updateCourse(Course course) {
        mySqlCon.save(course);
        return course;

    }

    @Override
    public void deleteCourse(long parseLong) {
        Course entity = mySqlCon.getReferenceById(parseLong);
        mySqlCon.delete(entity);

    }

}
