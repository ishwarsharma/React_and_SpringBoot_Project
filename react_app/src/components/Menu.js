import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="text-center">
      <ListGroup>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/"
          action
        >
          Home
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/add-course"
          action
        >
          Add Course
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/view-courses"
          action
        >
          View Course
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="#!"
          action
        >
          About
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="#!"
          action
        >
          Contact Us
        </Link>
      </ListGroup>
    </div>
  );
};

export default Menu;
