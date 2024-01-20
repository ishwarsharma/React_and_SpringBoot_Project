import React, {useEffect} from "react";
import { Button, Container } from "reactstrap";

function Home() {
   ////if we want to call function then we have to used useEffect function
   useEffect(() => {
    document.title = "Welcome to Home";
  }, []);
  
  return (
    <div className="mb-4 bg-light">
      <div className="container">
        <h1 className="display-4">Welcome to Our Courses Website</h1>
        <p className="lead">
          We offer a wide range of courses to help you achieve your career
          goals. Our courses are designed and taught by industry experts who
          have real-world experience in their fields.
        </p>
        <hr className="my-4" />
        <p>
          Whether you're just starting out or looking to advance your career, we
          have the right course for you. Our courses are flexible and
          affordable, so you can learn at your own pace and on your own
          schedule.
        </p>
        <Container className="text-center">
          <Button color="primary">Start Using</Button>
        </Container>
      </div>
    </div>
  );
}

export default Home;
