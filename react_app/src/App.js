import React from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AddCourse from "./components/AddCourse";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import AllCourses from "./components/AllCourses";
import { ToastContainer} from "react-toastify";

function App() {
  return (
    <div className="">
      <Router>
        <ToastContainer/>
        <Header />
        <Container>
          <Row>
            <Col md={3}>
              <Menu />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/add-course" element={<AddCourse />} exact />
                <Route path="/view-courses" element={<AllCourses />} exact />
              </Routes>
            </Col>
          </Row>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
