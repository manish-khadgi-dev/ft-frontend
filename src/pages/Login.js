import React, { useRef } from "react";
import Container from "react-bootstrap/esm/Container";
import { MainLayout } from "../components/mainLayout/MainLayout";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { CustomField } from "../components/customField/CustomField";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../helpers/axiosHelper";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const emailRef = useRef("");
  const pinRef = useRef("");

  const fields = [
    {
      label: "Email",
      placeholder: "manis@gmail.com",
      name: "email",
      type: "email",
      required: true,
      forwardedref: emailRef,
    },
    {
      label: "pin",
      placeholder: "*****",
      name: "pin",

      required: true,
      forwardedref: pinRef,
    },
  ];

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const loginObj = {
      email: emailRef.current.value,
      pin: pinRef.current.value,
    };

    const { status, message, result } = await loginUser(loginObj);
    toast[status](message);

    if (status === "success" && result?._id) {
      sessionStorage.setItem("user", JSON.stringify(result));
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/dashboard");
    }
  };

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
              <Form onSubmit={handleOnSubmit}>
                {fields.map((item, i) => (
                  <CustomField key={i} {...item} />
                ))}
                <div className="d-grid">
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
              <div className="text-end mt-5">
                <Link to="/register"> Register Now</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};

export default Login;
