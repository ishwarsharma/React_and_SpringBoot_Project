import React, { useState, useEffect } from "react";
import Course from "./Course";
import base_url from "../api/BootApi";
import axios from "axios";
import { toast } from "react-toastify";

const AllCourses = () => {
  //if we want to call function then we have to used useEffect function
  useEffect(() => {
    document.title = "View All Courses";
  }, []);
  //Fetch courses from server using Axios
  const getAllCoursesFromServer = () => {
    axios.get(`${base_url}/courses`).then(
      (response) => {
        //console.log(response); //for success
        console.log(response.data);//this will show only data in a console
        toast.success("Server fetch data from database")
        setCourses(response.data);
      },
      (error) => {
        console.log(error); //for error
        toast.error("server is down")
      }
    );
  };
  //Call getAllCoursesFromServer when the component mounts
  useEffect(() => {
    getAllCoursesFromServer();
  }, []);

  //how to used multiple courses using array
  const [courses,setCourses] = useState([
   //we dont need this now { title: "Java Course", description: "this is demo" },
  ]);

   //how to make when i click delete button it should be updated at the same time.
   const updateCourses=(id)=>{
    setCourses(courses.filter((c)=>c.id!=id));
   };
  return (
    <div className="container">
      <h1>All Course</h1>
      <p>List of courses are as Follows</p>

      {courses.length > 0
        ? courses.map((item) => <Course key={item.id} course={item} update={updateCourses}/>)
        : "No courses"}
    </div>
  );
};
export default AllCourses;
