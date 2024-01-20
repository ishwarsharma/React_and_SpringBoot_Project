import React from "react";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  Button,
  Container,
} from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";
import base_url from "../api/BootApi";



const Course = ({ course,update }) => {
  const deleteCourse = (id) => {
    axios.delete(`${base_url}/courses/${id}`).then(
      (response) => {
        toast.success("course deleted");
        update(id);
      },
      (error) => {
        toast.success("course not deleted");
      }
    );
  };
  return (
    <Card>
      <CardBody className="text-center">
        <CardSubtitle>
          <h1>{course?.title}</h1>
        </CardSubtitle>
        <CardText>
          <h6>{course?.description}</h6>
        </CardText>
        <Container>
          <Button
            color="danger"
            onClick={() => {
              deleteCourse(course.id);
            }}
          >
            Delete
          </Button>
          <Button color="warning">Update</Button>
        </Container>
      </CardBody>
    </Card>
  );
};

export default Course;
