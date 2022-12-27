import React from "react";
import Container from "react-bootstrap/esm/Container";
import { MainLayout } from "../components/mainLayout/MainLayout";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { CustomField } from "../components/customField/CustomField";

const Login = () => {
  const fields = [
    {
      label: "Email",
      placeholder: "manis@gmail.com",
      name: "email",
      type: "email",
      required: true,
    },
    {
      label: "pin",
      placeholder: "*****",
      name: "pin",

      required: true,
    },
  ];

  return (
    <MainLayout>
      <Container className="mt-5">
        <Row className="login-page p-5 ">
          <Col className="bg-primary text-center">
            <div className="info  p-2 pt-5 text-white mt-5">
              <h1> Welcome Back to Our System</h1>
              <p> Tracker</p>
            </div>
          </Col>
          <Col>
            {" "}
            <div className="form">
              <div>
                <h1 className="text-center text-primary">Login here</h1>
              </div>
              <Form>
                {fields.map((item, i) => (
                  <CustomField key={i} {...item} />
                ))}
                <div className="d-grid">
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};

export default Login;
