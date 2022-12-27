import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomField } from "../components/customField/CustomField";
import { MainLayout } from "../components/mainLayout/MainLayout";

const Registration = () => {
  const fields = [
    {
      label: "Full Name",
      placeholder: "Manish KHadgi",
      name: "name",
      required: true,
    },
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
              <h1> Welcome to Our system</h1>
              <p> Manage your finance with tracker</p>
            </div>
          </Col>
          <Col>
            <div className="form">
              <div>
                <h1 className="text-center text-primary">Register here</h1>
              </div>
              <hr />
              <Form>
                {fields.map((item, i) => (
                  <CustomField key={i} {...item} />
                ))}
                <div className="d-grid">
                  <Button variant="primary" type="submit">
                    Register
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

export default Registration;
