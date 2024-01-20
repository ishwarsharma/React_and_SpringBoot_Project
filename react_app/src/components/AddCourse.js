import React, { Fragment, useEffect, useState } from "react";
import { Form, FormGroup, Input, Button, Container } from "reactstrap";
import axios from "axios";
import base_url from "../api/BootApi";
import { toast } from "react-toastify";

function AddCourse() {
  ////if we want to call function then we have to used useEffect function
  useEffect(() => {
    document.title = "Create New Course";
  }, []);

  //form handler function
  const handleForm = (e) => {
    console.log(course);
    postDatatoServer(course);
    e.preventDefault();
  };

  //creating function to post data on server
  const postDatatoServer = (data) => {
    axios.post(`${base_url}/courses`, data).then(
      (response) => {
        console.log(response);
        toast.success("course added successfully")
        console.log("success");
      },
      (error) => {
        console.log(error);
        toast.success("something went wrong")
        console.error("error");
      }
    );
  };

  //how to used multiple courses using array
  const [course, setCourse] = useState([]);

  return (
    <div className="mb-4">
      <Fragment>
        <h1 className="text-center my-3">Fill Course Details</h1>
        <Form onSubmit={handleForm}>
          <FormGroup>
            <label for="userId">Course Id</label>
            <Input
              type="text"
              placeholder="Enter here"
              id="userId"
              onChange={(e) => {
                setCourse({ ...course, id: e.target.value });
              }}
            />
          </FormGroup>
          <FormGroup>
            <label for="title">Course Title</label>
            <Input
              type="text"
              placeholder="Enter here"
              id="title"
              onChange={(e) => {
                setCourse({ ...course, title: e.target.value });
              }}
            />
          </FormGroup>
          <FormGroup>
            <label for="description">Course Description</label>
            <Input
              type="textarea"
              placeholder="Enter here"
              name="userId"
              id="description"
              onChange={(e) => {
                setCourse({ ...course, description: e.target.value });
              }}
            />
          </FormGroup>
          <Container className="text-center ">
            <Button type="submit" color="success">
              Add Course
            </Button>
            <Button type="reset" color="warning " className="ml-3">
              Clear
            </Button>
          </Container>
        </Form>
      </Fragment>
    </div>
  );
}

export default AddCourse;
